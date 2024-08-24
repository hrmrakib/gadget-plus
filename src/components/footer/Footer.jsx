import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        Tech
        <div>
          <div className='w-[90%] mx-auto '>
            <div className='flex justify-between items-center'>
              <div>
                <h2>Subscribe To Our Newsletter</h2>
                <div>
                  <input type='text' />
                  <button></button>
                </div>
              </div>

              <div>
                <h2 className='text-white text-2xl'>Join Our Social Media</h2>
                <div className='flex items-center gap-3'>
                  <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                    <FaFacebookF className='text-black' />
                  </div>
                  <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaXTwitter className='text-black' />
                  </div>
                  <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaYoutube className='text-black' />
                  </div>
                  <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaPinterestP className='text-black' />
                  </div>
                  <div className='bg-white p-1.5 rounded-full cursor-pointer'>
                  <FaInstagram className='text-black' />
                  </div>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div> 
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
