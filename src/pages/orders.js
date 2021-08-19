import moment from "moment";
import { getSession, useSession } from "next-auth/client";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import db from "../../firebase";
import Order from "../components/order/Order";

const Orders = ({ orders }) => {
  const [session] = useSession();

  //   console.log(orders);
  return (
    <>
      <Header />
      <main className='py-10 max-w-screen-lg mx-auto pb-52 px-5'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
          Your Orders
        </h1>

        {session ? (
          <h2> {orders.length} Orders</h2>
        ) : (
          <p>Please sign in to see orders</p>
        )}

        <div className='mt-5 space-y-4'>
          {orders?.map(
            ({
              id,
              name,
              amount,
              amountShipping,
              items,
              timestamp,
              images,
            }) => (
              <Order
                key={id}
                id={id}
                name={session.user.name}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  //  Get the users logged in credentials

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  //Firebase db
  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  //Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
      session,
    },
  };
}
