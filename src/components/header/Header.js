import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  LocationMarkerIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        {/* Logo */}
        <div className='mt-2 flex items-center '>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
            onClick={() => router.push("/")}
          />
        </div>

        {/* Delivery Address */}

        <div className='flex h-9 mr-4 text-white whitespace-nowrap link flex-grow md:flex-grow-0 items-center'>
          <LocationMarkerIcon className='h-7 md:pr-1 hover:text-yellow-500' />
          <div className='hidden md:inline'>
            <p className='text-xs'>Deliver to Ningombam</p>
            <p className='font-bold md:text-sm'>Imphal 795001</p>
          </div>
        </div>

        {/* Search bar */}

        <div className='hidden md:flex flex-grow  bg-yellow-400 hover:bg-yellow-500 rounded-md h-10 cursor-pointer'>
          <div className='h-10 px-4 flex items-center bg-gray-200 rounded-l-md hover:bg-gray-300'>
            <p>All</p>
          </div>
          <input
            type='text'
            className='p-2 flex-grow focus:outline-none'
            placeholder='Search Amazon.in'
          />
          <SearchIcon
            className='p-2.5'
            onClick={(e) => console.log("Search")}
          />
        </div>

        {/* Right */}

        <div className=' flex text-white  items-center space-x-5 mx-4 whitespace-nowrap'>
          <div className=' hidden lg:flex items-center link'>
            <Image
              src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
              width={30}
              height={20}
              objectFit='contain'
            />
            <ChevronDownIcon className='ml-1 h-5' />
          </div>
          <div className='link' onClick={!session ? signIn : signOut}>
            <p className='text-xs '>
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className='font-bold text-xs md:text-sm'>Account & Lists</p>
          </div>
          <div
            className=' link hidden lg:block'
            onClick={() => router.push("/orders")}
          >
            <p className='text-xs'>Returns</p>
            <p className='font-bold md:text-sm'>& Orders</p>
          </div>
          <div
            className='link flex items-end relative'
            onClick={() => router.push("/checkout")}
          >
            <ShoppingCartIcon className='h-8 md:h-10' />
            <p className='hidden md:inline font-bold md:text-sm'>Cart</p>

            <span className='absolute top-0 right-0 md:right-6 w-4 h-4 bg-yellow-500 text-center rounded-full font-bold text-xs'>
              {items.length}
            </span>
          </div>
        </div>
      </div>

      {/* small screen search bar */}
      {/* Search bar */}
      <div className='bg-amazon_blue px-3 pb-3 flex md:hidden'>
        <div className='flex flex-grow bg-yellow-400 hover:bg-yellow-500 rounded-md h-10 cursor-pointer'>
          <div className='h-10 px-4 flex items-center bg-gray-200 rounded-l-md hover:bg-gray-300'>
            <p>All</p>
          </div>
          <input
            type='text'
            className='p-2 flex-grow focus:outline-none'
            placeholder='Search Amazon.in'
          />
          <SearchIcon
            className='p-2.5'
            onClick={(e) => console.log("Search")}
          />
        </div>
      </div>

      {/* bottom nav */}
      <div className='flex items-center bg-amazon_blue-light text-white space-x-3 p-2 pl-6 whitespace-nowrap text-sm'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' /> All
        </p>
        <p className='link'>Best Sellers</p>
        <p className='link'>AmazonBasics</p>
        <p className='link hidden sm:inline-flex'>Customer Service</p>
        <p className='link hidden sm:inline-flex'>Amazon Business</p>
        <p className='link hidden md:inline-flex'>Home Improvement</p>
        <p className='link hidden md:inline-flex'>Gift Ideas</p>
        <p className='link hidden lg:inline-flex'>Pet Supplies</p>
        <p className='link hidden lg:inline-flex'>
          Healt, Household & Personal Care
        </p>
        <p className='link hidden xl:inline-flex'>Kindle eBooks</p>
        <p className='link hidden xl:inline-flex'>Amazon Pay</p>
        <p className='link hidden xl:inline-flex'>Gift Cards</p>
      </div>
    </header>
  );
};

export default Header;
