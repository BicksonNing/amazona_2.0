module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "upload.wikimedia.org",
      "images-eu.ssl-images-amazon.com",
    ],
  },
  env: {
    stripe_public_key: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
};
