import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='max-w-[1240px] m-auto flex justify-between items-center  text-black'>
      <Link href="/">
        <Image
            className='flex container' 
            width={180}
            height={180}    
            src="https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/elite-logo.jpg"
            alt="Logo" 
        />
      </Link>
      <div >
      <Link className='p-4' href="/">
        HOME
      </Link>
      <Link className='p-4' href="/about">
        ABOUT
      </Link>
      <Link className='p-4' href="/projects">
        PROJECTS
      </Link>
      <Link className='p-4' href="/contact">
        CONTACT
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
