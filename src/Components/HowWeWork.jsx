import React from "react";
import { motion } from "framer-motion";
import dottedBg from "../Images/dotted-lines.png";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


const HowWeWork=()=>{
    return(
        <>
        <section className="how-we-work">
      <div
        className="how-we-work-wrapper"
        style={{ backgroundImage: `url(${dottedBg})` }}
      >
        {/* Center Heading */}
        <motion.div
          className="how-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="subtitle section-subheading">This is How We Work</h3>
          <h2 className="section-heading">
            Simple, Thoughtful <br /> & Traveler-First
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="how-card top"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -8, scale: 1.04 }}
          viewport={{ once: true }}
        >
          <h4>Understand</h4>
          <p>We begin by listening to your interests, preferences, and travel goals.</p>
        </motion.div>

        <motion.div
          className="how-card top-right"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -8, scale: 1.04 }}
          viewport={{ once: true }}
        >
          <h4>Curate</h4>
          <p>Our team selects the best experiences, stays, and routes tailored to your style.</p>
        </motion.div>

        <motion.div
          className="how-card bottom-right"
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -8, scale: 1.04 }}
          viewport={{ once: true }}
        >
          <h4>Plan</h4>
          <p>We finalize every detail—timelines, logistics, bookings—to ensure a smooth journey.</p>
        </motion.div>

        <motion.div
          className="how-card bottom-left"
          custom={3}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -8, scale: 1.04 }}
          viewport={{ once: true }}
        >
          <h4>Deliver</h4>
          <p>Your personalized itinerary is shared with clear guidance and ready-to-travel ease.</p>
        </motion.div>

         <motion.div
          className="how-card top-left"
          custom={3}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -8, scale: 1.04 }}
          viewport={{ once: true }}
        >
          <h4>Support</h4>
          <p>We stay with you throughout your trip, offering assistance whenever you need it.</p>
        </motion.div>
      </div>
    </section>
        </>
    )
}

export default HowWeWork;