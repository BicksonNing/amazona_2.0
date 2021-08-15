import Image from "next/image";
import Header from "../components/header/Header";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckOutProduct from "../components/cart/CheckOutProduct";
import Currency from "react-currency-formatter-v2";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";

function Checkout() {
  const router = useRouter();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className='bg-gray-200'>
      <Header />
      <main className='p-5 lg:flex mx-auto space-x-0 lg:space-x-5'>
        {/* left */}

        <div className='flex-grow'>
          {/* <div className='rounded-md mb-3 flex-grow'>
            <Image
              src='https://links.papareact.com/ikj'
              width={1030}
              height={265}
              objectFit='contain'
            />
          </div> */}

          {items.length === 0 ? (
            <div className='bg-white rounded-md px-5 py-10 mb-5'>
              {" "}
              <div className='space-y-1'>
                <h1 className='text-2xl md:text-3xl'>
                  Your Amazon Cart is empty.
                </h1>
                <p className='text-sm md:text-lg'>
                  Check your Saved for later items below or
                  <span
                    className='text-yellow-500 hover:text-yellow-700 cursor-pointer'
                    onClick={() => router.push("/")}
                  >
                    {" "}
                    continue shopping
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className='bg-white rounded-md p-5 pb-20 space-y-3'>
              <h1 className='text-2xl md:text-3xl'>Shopping Cart</h1>
              <hr className='text-gray-300' />
              <div>
                {/* cart item */}
                {items.map((item, i) => (
                  <CheckOutProduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                  />
                ))}
              </div>
              <div className='flex justify-end'>
                <p className='text-xl'>
                  {" "}
                  <span>
                    Subtotal ({items.length}{" "}
                    {items.length > 1 ? "items" : "item"}):
                  </span>{" "}
                  <span className='font-bold'>
                    <Currency quantity={total * 74} currency='INR' />
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* right */}

        <div className='space-y-5 flex-none'>
          <div className='hidden lg:flex bg-white rounded-md h-16'>
            <Image
              src='https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png'
              width={400}
              height={60}
              objectFit='contain'
            />
          </div>

          {items.length > 0 && (
            <div className='bg-white p-5 rounded-md space-y-3'>
              <div className='flex items-center space-x-2'>
                <CheckCircleIcon className='h-6 text-green-600' />

                <div>
                  <p className='text-sm text-green-600'>
                    Your order is eligible for FREE Delivery
                  </p>
                  <p className='text-sm'>
                    Select this option at checkout.{" "}
                    <span className='text-green-600 hover:underline cursor-pointer'>
                      Details
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h2 className='text-xl md:text-md'>
                  Subtotal ({items.length} {items.length > 1 ? "items" : "item"}
                  ) :{" "}
                  <span className='font-bold'>
                    <Currency quantity={total * 74} currency='INR' />
                  </span>
                </h2>
                <div className='flex items-center space-x-2 mx-1'>
                  <input type='checkbox' name='' id='' />
                  <p className='text-sm'>This order contains a gift</p>
                </div>
              </div>

              <div className='flex flex-col'>
                <button
                  disabled={!session}
                  className={`button rounded-md ${
                    !session &&
                    "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {!session ? "Sign in to checkout" : "Procees to buy"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
