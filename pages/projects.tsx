import React from "react";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Projects() {
  return (
    <>
        <Hero backgroundImage={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Langa-street-art-Photo-credit-Tayla-Gentle-17.jpg"} header={"OUR PROJECTS"} message={""} buttonText={""} showButton={false} backgroundPosition={""} />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 p-32 ">
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Langa-street-art-Photo-credit-Tayla-Gentle-17.jpg"}
            header={"Langa Spatial Open Spaces"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/portia-primary-school.jpg"}
            header={"ASIDI - Accelerated Schools Infrastructural Development Initiative - 2013"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/philipi-aerial.png"}
            header={"Nolungile and Phillipi Station Modernisation by PRASA - 2013"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Langa+Station.png"}
            header={"Langa Station Public Urban Spaces Development - 2012"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Khayelitsha+Serivce+Centre.jpg"}
            header={"Khayelitsha Shared Services Office Building construction - 2010"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Cape-Town-station.jpg"}
            header={"Cape Town Station Revitalization 2030 Feasibility Study"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Park-Station.jpg"}
            header={"Cape Town Station Revitalization 2010 priority projects"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Gugulethu.jpg"}
            header={"Construction of Gugulethu Shopping Square"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Khayeslitsha-District-Hospital-8.jpg"}
            header={"Construction of Khayelitsha District Hospital"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Khayelitsha+Railway+extension.jpg"}
            header={"Development of Khayelitsha Railway Extension"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/800px-Khayelitsha_Lookout-Hill_Ilitha-Park.jpg"}
            header={"Greenpoint Phase Two Housing Development - Informal Settlement in Khayelitsha"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/District+Six.jpg"}
            header={"Facilitation of Spatial Development Framework and Business Plan for District Six - mixed use land restitution"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Klipfontein+Corridor.jpg"}
            header={"Klipfontein Corridor"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Wetton-Lansdown.jpg"}
            header={"Wetton-Lansdowne Corridor"} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Tygerberg.jpg"}
            header={"Isilimela IDP process in Tygerberg municipality."} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/kuyasa-3.jpg"}
            header={"Kuyasa retrofitting housing project."} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Phillipi.jpg"}
            header={"Green point housing phase 2 - Transnet Housing Philippi "} 
            description={""} 
            />
        <ProjectCard 
            imageSrc={"https://ludumobucket.s3.eu-central-1.amazonaws.com/EC-Web+images/Masiphakameni.jpg"}
            header={"Masiphakameni Municipal Services project."} 
            description={""} 
            />
    </div>
    <Footer />
</>
  )
}

export default Projects;