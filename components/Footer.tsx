import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-xs">&copy; Elite Consulting 2023</p>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <h3 className="font-medium text-lg mb-3">Contact Us</h3>
            <p className="mb-3">
              Email: info@eliteconsulting.com <br />
              Phone: (123) 456-7890
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <h3 className="font-medium text-lg mb-3">Quick Links</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-white hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white hover:text-gray-400">Services</a></li>
              <li className="mb-2"><a href="#" className="text-white hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-white hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <p className="mb-3">Improving the quality of life for all residents through the joint creation of secure and environmentally friendly communities.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
