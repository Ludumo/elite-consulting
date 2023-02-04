import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero 
            backgroundImage={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/cape-flats2.png"}
            header={"Improving the quality of life for all residents throughthe joint creation of secure and environmentally friendly communities."}
            message={""}
            buttonLink="/about"
            buttonText={"Enter"}
            showButton={true}
            backgroundPosition='center' 
          /> 
             <br/>
             <p className="flex justify-center text-xl p-12 mx-auto  font-light text-center">
             The phrase "Improving the quality of life for all residents through the joint creation of secure and environmentally friendly communities"
              highlights the importance of creating communities that prioritize both the safety and well-being of its residents, as well as the preservation
               and protection of the environment. In today's society, it is increasingly recognized that a community's success is not just measured by its 
               economic growth, but also by the quality of life of its residents. 
               
            </p>
      <Footer />
    </div>
  )
}
