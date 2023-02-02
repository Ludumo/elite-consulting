import React from "react";
import Image from "next/image";

interface Props {
    imageSrc: string;
    header: string;
    description: string;
  }
  
  const Card = ({ imageSrc, header, description }: Props) => {
    return (
      <div className="flex justify-center items-center p-4 flex-col">
        <Image 
            src={imageSrc} 
            alt={header} 
            width="500"
            height="100"
        />
        <div className="p-8">
            <h2 className="text-xl font-bold mb-2">{header}</h2>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  