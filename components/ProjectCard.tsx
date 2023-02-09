import React from "react";
import Image from "next/image";

interface Props {
    imageSrc: string;
    header: string;
    description: string;
  }
  
  const Card = ({ imageSrc, header, description }: Props) => {
    return (
      <div className="flex-autox">

      <div className="items-center m-auto overflow-hidden p-2 rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <a href="/" className="block w-full h-full">
        <Image 
            src={imageSrc} 
            alt={header} 
            width="500"
            height="100"
            className="object-cover w-full max-h-40"
            />
        <div className="w-full p-4 bg-white dark:bg-gray-500">
            <h2 className="font-medium text-white text-md">{header}</h2>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">{description}</p>
        </div>
        </a>
      </div>
            </div>
    );
  };
  
  export default Card;
  


        
        <div className="">
            <p className="">
            </p>
            
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
            </p>
        </div>

