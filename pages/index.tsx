import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero backgroundImage={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/scott-blake-x-ghf9LjrVg-unsplash.jpg"} 
            header={"ELITE CONSULTING"} 
            message={"Facilitating Social Inclusion in the building and engineering environment"} 
            buttonLink="/about"
            buttonText={"Enter"} />
      <Footer />
    </div>
  )
}
