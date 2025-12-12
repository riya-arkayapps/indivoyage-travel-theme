import React from "react";
import breadCrumbImg from '../Images/Faq-breadCrumb.webp';
import Header from "../Components/Header";


const FAQ=()=>{
    return(
        <>
           <Header 
        bgImage={breadCrumbImg}
      pageTitle="Frequently Asked Questions"
  subheading="Still have doubts ?"
  mainHeading="Your travel doubts, answered clearly "
  description="At IndiVoyage, we want every journey to feel effortless, informed, and personalized. Our FAQ section is designed to give you quick clarity on the things travelers ask most—whether it’s about planning, customization, safety, payments, or how our itineraries work. Explore these answers to understand how we craft seamless trips and what you can expect when you travel with us. And if you ever need more help, our team is always just a message away."
  showDescription={true}/>
        </>
    )
}

export default FAQ;