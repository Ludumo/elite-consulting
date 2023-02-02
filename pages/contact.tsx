import React, { useState } from 'react';
import Hero from '../components/Hero';
import Link from 'next/link';

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
      backgroundImage={'https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/cape-flats-1256x942.jpg'} 
      header={'CONTACT US'} 
      message={'Send Us an email'} 
      buttonText={'Enter'} 
      showButton={true} 
      buttonLink={'https://ludumo@eliteconsulting.co.za'}
    />
    <form className='max-w-[600px] m-auto p-10' 
    onSubmit={handleSubmit}>
      <div  className='grid grid-cols-4 gap-2'>
      <label htmlFor="name">Name:</label>
      <input
      className='border shadow-lg p-3'
      type="text"
      id="name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
      className='border shadow-lg p-3'
      type="email"
      id="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      />
     </div>
      <label htmlFor="message">Message:</label>
      <textarea
      className='border shadow-lg p-3 w-full'
      id="message"
      value={message}
      onChange={(event) => setMessage(event.target.value)}
      />
      <button 
            className='border shadow-lg p-3 w-full mt-2' 
            type="submit">Submit
      </button>
    </form>
  </div>
  );
};

export default Contact;