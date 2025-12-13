import React from "react";
import { motion } from "framer-motion";
import { adventures } from "../Data";
import breadCrumbImg from '../Images/Adventure-breadCrumb.webp';
import Header from "../Components/Header";
import Cta from "../Components/Cta";

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

  <div className="next-section-margin"></div>

  {/**Destinations Section */}
        <div className="bg-wrapper">
    <div className="destinations-section">
     
      <div className="destinations-cards">
        {adventures.map((i, index) => (
          <motion.div
            className="destination-card"
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
          >
  
            <motion.img
              src={i.img}
              alt={i.title}
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            />
  
            <div
              className="card-content"
            >
              <h3 className="section-heading">{i.title}</h3>
              <p>{i.desc}</p>
            </div>
  
          </motion.div>
        ))}
      </div>
  
    </div>
  </div>

          {/**Form section */}
         <Cta />
        </>
    )
}

export default Adventures;