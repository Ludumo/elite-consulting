import React from "react";
import Image from "next/image";

interface Props {
    imageSrc: string;
    header: string;
    description: string;
  }
  
  const Card = ({ imageSrc, header, description }: Props) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image 
            src={imageSrc} 
            alt={header} 
            width="150"
            height="100"
            className="w-full h-56 object-cover"
        />
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default Card;
  