import React from "react";

/**Image Import */
import breadCrumbImg from '../Images/about-hero.webp';

/**Components Import */
import Header from "../Components/Header";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import Cta from "../Components/Cta";
import MissionVision from "../Components/MissionVision";
import HowWeWork from "../Components/HowWeWork";

const About=()=>{
    return(
        <>
        <Header 
        bgImage={breadCrumbImg}
      pageTitle="About IndiVoyage"
  subheading="Crafting Journeys That Feel Personal"
  mainHeading="Your story, your way."
  description="Indivoyage is built on one simple idea — travel should feel uniquely yours, crafted around what truly inspires you. We bring together deep local insights, thoughtfully curated routes, and detail-oriented planning to help you discover India in a way that aligns with your pace, passions, and travel style. From iconic heritage cities and vibrant cultural hotspots to remote landscapes and lesser-known gems, every journey is designed to be immersive, seamless, and unforgettable. Our goal is to remove the stress of planning and elevate the joy of exploring — whether you’re chasing adventure, celebrating culture, or embracing the beauty of slow travel. With Indivoyage, every trip feels meaningful, effortless, and deeply personal, turning every journey into a story worth remembering."
  showDescription={true}/>
       <div className="next-section-margin"></div>
     {/**Mission and Vision Section */}
     <MissionVision />

        {/**Experience travel section */}
       <Features />

        {/**Simple, Thoughtful, & Traveler-First */}
            <HowWeWork />
            
       {/**Testimonials Section */}
        <Testimonials />

        {/**Request a quote section */}
        <Cta />

        </>
    )
}

export default About;