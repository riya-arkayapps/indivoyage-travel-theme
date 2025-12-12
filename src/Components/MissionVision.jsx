import React from "react";
import { motion } from "framer-motion";

const MissionVision=()=>{
    return(
        <>
         <section className="journey-section">
      <motion.div
        className="journey-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-heading line-height-class">
          The journey that<br />shapes who we are.
        </h2>
        <p>
         At Indivoyage, everything begins with a clear sense of identity and intention. Our story reflects where we come from, our vision captures where we’re headed, and our mission defines how we create meaningful travel experiences along the way. Together, they form the core of what we do — guiding every itinerary we craft, every traveler we support, and every journey we bring to life.
        </p>
      </motion.div>

      {/* New 1 Row - 2 Column Layout */}
      <div className="journey-grid">
        {/* LEFT COLUMN → 2 SMALL CARDS */}
        <div className="left-col">
          <motion.div
            className="journey-card gold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Vision</h3>
            <p>
            To become India’s most trusted travel companion by redefining how people explore — through personalized, responsible, and immersive journeys that inspire deeper connections with places, culture, and community.
            </p>
          </motion.div>

          <motion.div
            className="journey-card green"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Our Mission</h3>
            <p>
              To curate thoughtfully designed itineraries, supported by local insights and smooth planning, that empower every traveler to explore India with confidence, comfort, and authenticity — one unforgettable journey at a time.
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN → LARGE IMAGE CARD */}
        <motion.div
          className="right-col img-big-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="overlay">
            <h3>Our Story</h3>
            <p>
            Indivoyage began with a simple realization — travelers don’t just want destinations, they want experiences that feel personal. What started as a passion for exploring India’s diverse cultures and hidden gems grew into a commitment to craft journeys that are meaningful, seamless, and truly tailored to every traveler.
            </p>
          </div>
        </motion.div>
      </div>
      </section>
        </>
    )
}

export default MissionVision