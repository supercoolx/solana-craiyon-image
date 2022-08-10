import React from 'react';
import { FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mb-20'>
            <hr />
            <div className='mt-5 flex justify-between items-center'>
                <div className='flex-1'>
                    <FaTwitter size={50} />
                </div>
                <div className='flex-1 flex justify-center'>
                    <button className='bg-gray-500 rounded-md px-2 py-1 flex gap-2 items-center'>
                        <FaHeart color='#b22' />
                        <span className='text-sm'>Support Us</span>
                    </button>
                </div>
                <div className='flex-1' />
            </div>
            <div className='flex justify-center gap-5 text-gray-500 mt-5 text-lg'>
                <div>Privacy</div>
                <div>Terms</div>
            </div>
            <div className='text-center text-lg mt-5 font-bold text-gray-500'>
                © 2022 STUDIO9. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;