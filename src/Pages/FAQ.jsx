import React from "react";

/**Image Import */
import breadCrumbImg from '../Images/Faq-breadCrumb.webp';

/**Component Import */
import Header from "../Components/Header";
import Faqs from "../Components/Faqs";


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

  <div className="next-section-margin"></div>

  {/**Question-Answers */}
  <Faqs />
        </>
    )
}

export default FAQ;