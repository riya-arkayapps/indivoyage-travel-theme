import React from "react";
import breadCrumbImg from '../Images/Contact-breadCrumb.webp';
import Header from "../Components/Header";


const Contact=()=>{
    return(
        <>
          <Header 
        bgImage={breadCrumbImg}
      pageTitle="Contact Us"
  subheading="Contact Indivoyage"
  mainHeading="Your next adventure is just a message away"
  description="Whether you’re planning a quick escape or a once-in-a-lifetime journey, we’re here to help you get started effortlessly. Share your ideas, ask your questions, or tell us what kind of experience you’re looking for—and we’ll guide you with personalized suggestions and expert support. Let’s bring your travel plans to life, one message at a time."
  showDescription={true}/>
        </>
    )
}

export default Contact;