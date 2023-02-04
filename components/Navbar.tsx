import React , { useState, useEffect }  from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {

  return (
    <div className='max-w-[1240px] m-auto flex justify-between items-center text-black'>
      <Link href="/">
        <Image
            className='flex container' 
            width={180}
            height={180}    
            src="https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/elite-logo.jpg"
            alt="Logo" 
        />
      </Link>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                    <a href="/" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                        Home
                    </a>
                </li>
                <li className="mr-2">
                    <a href="/about" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                        About
                    </a>
                </li>
                <li className="mr-2">
                    <a href="/projects" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                        Projects
                    </a>
                </li>
                <li className="mr-2">
                    <a href="/contact" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
