import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero backgroundImage={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Schools+original+pics/Elite-Pics/IMG_7963.JPG"} 
            header={"Improving the quality of life for all residents throughthe joint creation of secure and environmentally friendly communities."} 
            message={""} 
            buttonLink="/about"
            buttonText={"Enter"}
            showButton={true}
            height="screen"
             /> 
             <br/>
             <p className="flex justify-center text-xl p-12 mx-auto  font-light text-center">Improving the quality of life for all residents through
               the joint creation of secure and environmentally friendly communities.
            </p>
      <Footer />
    </div>
  )
}
