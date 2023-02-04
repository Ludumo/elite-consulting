import React, { useState } from 'react';
import Hero from '../components/Hero';
import Link from 'next/link';
import Footer from '../components/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform some action with the form data, such as sending an email
    console.log(name, email, message);
    // Reset the form fields after the form has been submitted
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <Hero 
              backgroundImage={'https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Park-Station.jpg'}
              header={'CONTACT US'}
              message={''}
              buttonText={'Enter'}
              showButton={false}
              buttonLink={'https://ludumo@eliteconsulting.co.za'}
              height='10'
              backgroundPosition={'center'} 
       />
            <form className="flex w-full p-6 ">
                <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow:bg-gray-800">
                    <div className="mb-6 text-3xl font-light text-center text-gray-800:text-white">
                        Leave us a message
                    </div>
                    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                        <div className="col-span-2 lg:col-span-1">
                            <div className=" relative ">
                                <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="text-gray-700" >
                                        <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment">
                                        </textarea>
                                    </label>
                                </div>
                                <div className="col-span-2 text-right">
                                    <button type="submit" className="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
    <Footer />
  </div>
  );
};

export default Contact;
