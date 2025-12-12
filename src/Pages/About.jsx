import React from "react";
import { motion } from "framer-motion";
import breadCrumbImg from '../Images/about-hero.webp';
import Header from "../Components/Header";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import Cta from "../Components/Cta";
import MissionVision from "../Components/MissionVision";

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

     {/**Mission and Vision Section */}
     <MissionVision />

        {/**Simple, Thoughtful, & Traveler-First */}
            <section className="simple-section">
            <motion.h2
                className="center-title"
                initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            >
        Simple, Thoughtful, & Traveler‑First
        </motion.h2>


        <div className="workflow-grid">
        <motion.div
            className="workflow-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
        <h3>Understand</h3>
        <p>We begin by listening to your interests, preferences, and travel goals.</p>
        </motion.div>


        <motion.div
        className="workflow-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
>
        <h3>Curate</h3>
    <p>Our team selects the best experiences, stays, and routes tailored to your style.</p>
        </motion.div>


        <motion.div
    className="workflow-box"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
>
    <h3>Plan</h3>
    <p>We finalize every detail—timelines, logistics, bookings—to ensure a smooth journey.</p>
    </motion.div>


        <motion.div
        className="workflow-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        >
        <h3>Deliver</h3>
        <p>Your personalized itinerary is shared with clear guidance and ready-to-travel ease.</p>
        </motion.div>


        <motion.div
        className="workflow-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
        <h3>Support</h3>
        <p>We stay with you throughout your trip, offering assistance whenever you need it.</p>
        </motion.div>
        </div>
        </section>

      {/**Experience travel section */}
       <Features />

       {/**Testimonials Section */}
        <Testimonials />

        {/**Request a quote section */}
        <Cta />

        </>
    )
}

export default About;