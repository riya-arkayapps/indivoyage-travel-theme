import React from "react";
import breadCrumbImg from '../Images/location-breadCrumb.webp';
import Header from "../Components/Header";

const Locations=()=>{
    return(
        <>
         <Header 
        bgImage={breadCrumbImg}
      pageTitle="Explore Places across india"
  subheading="Explore Places Across India"
  mainHeading="Your travel doubts, answered clearly "
  description="India is a land of endless journeys—where every region offers something unique, beautiful, and deeply memorable. From towering mountains and golden deserts to serene beaches, ancient temples, lush forests, and vibrant cities, the country is filled with destinations waiting to be explored. This section brings together the best places across India, helping you find experiences that match your interests, pace, and travel style. Whether you’re planning an adventure, a cultural escape, or a peaceful getaway, your next destination starts here."
  showDescription={true}/>
        </>
    )
}

export default Locations;