import moment from "moment";
import Currency from "react-currency-formatter-v2";

const Order = ({
  id,
  name,
  amount,
  amountShipping,
  items,
  timestamp,
  images,
}) => {
  return (
    <div className='relative border rounded-md'>
      <div className='flex items-center space-x-10 text-sm text-gray-600 bg-gray-100 p-5 rounded-t-md'>
        <div>
          <p className='text-xs'>ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className='text-xs'>TOTAL</p>
          <p>
            <Currency quantity={amount} currency='INR' />
          </p>
        </div>
        <div className='flex-grow'>
          <p className='text-xs'>SHIP TO</p>
          <p className='font-bold'>{name}</p>
        </div>

        <div className='hidden md:flex space-x-3 font-bold self-end text-right'>
          <p className='link'>View Order Details </p>
          <span>|</span>
          <p className='link'> Invoice</p>
        </div>
      </div>
      <p className='hidden text-xs md:block absolute top-4 right-5 w-40 lg:w-72 truncate'>
        ORDER # {id}
      </p>

      <div className='p-5 sm:p-10'>
        <div className='flex space-x-6 overflow-x-auto'>
          {images.map((image) => (
            <img
              loading='lazy'
              src={image}
              className='h-20 sm:h-32 object-contain'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
