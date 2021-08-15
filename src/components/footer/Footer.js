import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Footer() {
  return (
    <div>
      {/* Back to Top */}
      <div className='bg-gray-700 py-2 text-center text-white hover:bg-gray-800 cursor-pointer'>
        <p>Back to top</p>
      </div>

      <div className='bg-amazon_blue-light py-10'>
        {/* Important link */}
        <div className='max-w-screen-xl mx-auto px-10 pb-10'>
          <div className='grid grid-cols-2 lg:grid-cols-4 text-white'>
            <div className='mb-5'>
              <p className='font-bold text-md'>Get to Know Us</p>
              <div className='mt-2 text-sm text-gray-200 space-y-1'>
                <p className='cursor-pointer hover:underline'>About Us</p>
                <p className='cursor-pointer hover:underline'>Careers</p>
                <p className='cursor-pointer hover:underline'>Press Releases</p>
                <p className='cursor-pointer hover:underline'>Amazon Cares</p>
                <p className='cursor-pointer hover:underline'>Gift a Smile</p>
              </div>
            </div>
            <div className='mb-5'>
              <p className='font-bold text-md'>Connect with Us</p>
              <div className='mt-2 text-sm text-gray-200 space-y-1'>
                <p className='cursor-pointer hover:underline'>Facebook</p>
                <p className='cursor-pointer hover:underline'>Twitter</p>
                <p className='cursor-pointer hover:underline'>Instagram</p>
              </div>
            </div>
            <div className='mb-5'>
              <p className='font-bold text-md'>Make Money with Us</p>
              <div className='mt-2 text-sm text-gray-200 space-y-1'>
                <p className='cursor-pointer hover:underline'>Sell on Amazon</p>
                <p className='cursor-pointer hover:underline'>
                  Sell under Amazon Accelerator
                </p>
                <p className='cursor-pointer hover:underline'>
                  Become an Affiliate
                </p>
                <p className='cursor-pointer hover:underline'>
                  Fullfillment by Amazon
                </p>
                <p className='cursor-pointer hover:underline'>
                  Advertise your Products
                </p>
                <p className='cursor-pointer hover:underline'>
                  Amazon Pay in Merchants
                </p>
              </div>
            </div>
            <div className='mb-5'>
              <p className='font-bold text-md'>Let Us Help You</p>
              <div className='mt-2 text-sm text-gray-200 space-y-1'>
                <p className='cursor-pointer hover:underline'>
                  COVID-19 and Amazon
                </p>
                <p className='cursor-pointer hover:underline'>Your Account</p>
                <p className='cursor-pointer hover:underline'>Returns Centre</p>
                <p className='cursor-pointer hover:underline'>
                  100% Purchase Protection
                </p>
                <p className='cursor-pointer hover:underline'>
                  Amazon App Download
                </p>
                <p className='cursor-pointer hover:underline'>
                  Amazon Assiteant Download
                </p>
                <p className='cursor-pointer hover:underline'>Help</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-b border-opacity-30'></div>
        {/* Country List */}
        <div className='max-w-screen-xl mx-auto pt-10'>
          <div className='flex items-center justify-center space-x-10 lg:space-x-20'>
            <Image
              src='https://links.papareact.com/f90'
              width={140}
              height={28}
              objectFit='contain'
              className='cursor-pointer'
              onClick={() => router.push("/")}
            />
            <div className='flex items-center space-x-1 border px-3 py-1 text-gray-400 rounded-md'>
              <GlobeAltIcon className='h-5' />
              <p>English</p>
              <ChevronDownIcon className='h-3' />
            </div>
          </div>

          <div className='flex flex-wrap px-10 pt-5 text-gray-200 justify-center'>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Autralia
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Brazil
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Canada
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>China</p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              France
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Germany
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>Italy</p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>Japan</p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Mexico
            </p>
            <p className='text-xs cursor-pointer hover:underline'>
              Netherlands
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Poland
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Singapore
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>Spain</p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              Turkey
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              United Arab Emirates
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              United States
            </p>
            <p className='text-xs cursor-pointer hover:underline mx-2'>
              United Kingdom
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      {/* copyright */}
      <div className='bg-amazon_blue py-5 text-gray-200 flex flex-wrap justify-center'>
        <p className='text-xs cursor-pointer hover:underline mx-4'>
          Conditions of Use & Sale
        </p>
        <p className='text-xs cursor-pointer hover:underline mx-4'>
          Privacy Notice
        </p>
        <p className='text-xs cursor-pointer hover:underline mx-4'>
          Interest-Based Ads
        </p>

        <p className='text-xs cursor-pointer hover:underline mx-4'>
          © 1996-2021, Amazon.com Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Footer;
