import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter-v2";
import { removeFromBasket } from "../../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckOutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const removFromCart = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className='my-2'>
      <div className='grid grid-cols-5 mb-3'>
        {/* <input type='checkbox' name='' id='' /> */}
        <Image src={image} width={200} height={200} objectFit='contain' />
        {/* Middle */}
        <div className='col-span-4 md:col-span-3 mx-5 space-y-2'>
          <p className='text-xl line-clamp-2'>{title}</p>
          <div>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className='h-5 text-yellow-500' />
              ))}
          </div>
          <div>
            <p className='text-sm line-clamp-3 my-2'>{description}</p>
          </div>

          {hasPrime && (
            <div className='flex items-center space-x-2'>
              <img
                className='w-12'
                loading='lazy'
                src='https://links.papareact.com/fdw'
                alt=''
              />
              <p className='text-xs text-gray'>Free Next-Day delivery</p>
            </div>
          )}
          <div className='flex'>
            <p className='text-xs space-x-3'>
              <span
                className='cursor-pointer text-yellow-600 hover:text-yellow-700'
                onClick={removFromCart}
              >
                Delete
              </span>
              <span>|</span>
              <span className='cursor-pointer  text-yellow-600 hover:text-yellow-700'>
                Save for later
              </span>
              <span>|</span>
              <span className='cursor-pointer  text-yellow-600 hover:text-yellow-700'>
                See more like this
              </span>
            </p>
          </div>
          <p className='flex md:hidden font-bold text-md md:text-xl'>
            <Currency quantity={price * 74} currency='INR' />
          </p>
        </div>

        <div className='hidden md:flex justify-end'>
          <p className='font-bold text-md md:text-xl'>
            <Currency quantity={price * 74} currency='INR' />
          </p>
        </div>
      </div>

      <hr className='text-gray-300' />
    </div>
  );
}

export default CheckOutProduct;
