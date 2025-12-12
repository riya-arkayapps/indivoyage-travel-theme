import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <motion.div
          className="footer-col brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="footer-logo">IndiVoyage</h2>
          <p>
            Heritage and adventures, curated for your journey. Discover India
            through an immersive gateway designed to connect you with the nation's
            most iconic landscapes, cultures, and experiences.
          </p>
        </motion.div>

        {[
          { title: "Quick Links", items: ["Home","About us","Adventures","Contact us","FAQ"] },
          { title: "Recommended Travel", items: ["Hampi","Coorg","Munnar","Rishikesh","Pondicherry"] },
          { title: "Adventures", items: ["Hot Air Ballooning","Wildlife Safari","Scuba Diving","Backwater Cruise","Wildlife"] },
        ].map((col, i) => (
          <motion.div
            className="footer-col"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="footer-bottom-img"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ></motion.div>
    </footer>
  );
};

export default Footer;
