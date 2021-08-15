import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter-v2";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

function Product({ id, title, price, description, image, category }) {
  const MIN_RATING = 1;
  const MAX_RATING = 5;

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };

    //Sending product as an action to the REDUX Store.... the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className='relative flex flex-col m-5 bg-white rounded-md p-10 z-20 shadow-md'>
      <p className='absolute top-2 right-2 text-sm italic text-gray-400'>
        {category}
      </p>
      <Image src={image} width={200} height={200} objectFit='contain' />
      <h4 className='my-3'>{title}</h4>

      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='text-yellow-500 h-5' />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <Currency quantity={price * 74} currency='INR' />
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img src='https://links.papareact.com/fdw' alt='' className='w-12' />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button className='mt-auto button' onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
