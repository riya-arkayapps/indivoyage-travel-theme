import React from "react";
import breadCrumbImg from '../Images/Adventure-breadCrumb.webp';
import Header from "../Components/Header";


const Adventures=()=>{
    return(
        <>
         <Header 
        bgImage={breadCrumbImg}
      pageTitle="Adventures Across India"
  subheading="Where Every Mile Sparks a New Adventure"
  mainHeading="Discover Incredible Adventures Across India"
  description="Embark on a journey through India’s diverse landscapes, from misty mountains and sun-kissed beaches to ancient forts, bustling bazaars, lush forests, and hidden natural wonders. Every destination offers a fresh rush of excitement—whether you’re chasing adrenaline, exploring vibrant culture, trekking through wild terrains, or uncovering offbeat gems waiting to be discovered. Let India’s timeless charm and untamed spirit lead you to experiences that inspire, thrill, and stay with you long after the journey ends."
  showDescription={true}/>
        </>
    )
}

export default Adventures;