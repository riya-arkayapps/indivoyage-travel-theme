import React from "react";
import { motion } from "framer-motion";
import footerImg from "../Images/footer.webp";

const Sidebar = ({ open, setOpen }) => {
  const variants = {
    hidden: { x: "-100%" },   
  visible: { x: "0%" }, 
  };

  return (
    <motion.div
      className="sidebar"
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="sidebar-content">

        <p className="back-btn" onClick={() => setOpen(false)}>‹ Back</p>

        <h2 className="sidebar-title">IndiVoyage</h2>

        <ul className="sidebar-links">
          <li>Home</li>
          <li>About us</li>
          <li>Adventures</li>
          <li>Contact us</li>
          <li>FAQ</li>
        </ul>

        <img
          src={footerImg}
          alt="illustration"
          className="sidebar-footer-img"
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;
