import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { destinations } from "../Data";
import breadCrumbImg from '../Images/location-breadCrumb.webp';
import Header from "../Components/Header";
import Cta from "../Components/Cta";

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

   <div className="next-section-margin"></div>
   
        {/**Destinations Section */}
      <div className="bg-wrapper">
  <div className="destinations-section">
   
    <div className="destinations-cards">
      {destinations.map((i, index) => (
        <Link
      to="/locationDetail"
      key={index}
      className="card-link"
    >
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
    </Link>
      ))}
    </div>

  </div>
</div>

      {/**Form section */}
   <Cta />
        </>
    )
}

export default Locations;