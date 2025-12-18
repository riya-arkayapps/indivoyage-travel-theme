import React from "react";
import { motion } from "framer-motion"; 

/**Image Import */
import icon1 from '../Images/i1.png';
import icon2 from '../Images/i2.png';
import icon3 from '../Images/i3.png';

const Features=()=>{
    return(
        <>
         <div className="travel-section">
          <motion.h3
            className="section-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            seamless assistance at every step
          </motion.h3>
        
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Experience Travel,<br />The Right Way
          </motion.h2>
        
          <motion.div
            className="features-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.p
              className="travel-desc"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              A land where history, artistry, and grandeur come together to create an experience unlike any other. Known for its majestic forts, opulent palaces, and vibrant desert landscapes, the state captures the true essence of India’s royal past.
            </motion.p>
        
            <div className="travel-features">
              {[{icon: icon1, title: "Curated Experiences", desc: "Handpicked routes, local stories, and meaningful moments—never generic tours."},
                {icon: icon2, title: "Seamless Planning", desc: "Verified stays, smart itineraries, and smooth coordination for a stress-free journey."},
                {icon: icon3, title: "Trusted Expertise", desc: "Accurate guidance, transparent pricing, and support you can rely on anytime."}].map((f, index) => (
                <motion.div
                  className="feature"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={f.icon} alt="" className="feature-icon" />
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        </>
    )
}

export default Features;