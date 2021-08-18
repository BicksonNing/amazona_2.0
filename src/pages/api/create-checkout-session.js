const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformItems = items.map((item) => ({
    price_data: {
      currency: "inr",
      unit_amount: item.price * 74 * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
    description: item.description,
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: ["shr_1JP9NCSEIvrTanO3S8qrDICi"],
    shipping_address_collection: {
      allowed_countries: ["IN", "CN"],
    },
    line_items: transformItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
