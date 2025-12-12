import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";


const Header = ({
   bgImage,
  pageTitle,
  subheading,
  mainHeading,
  description,
  showDescription = true
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {/* NAVBAR BUTTON */}
      <div className="logo-with-btn">
        <h1 className="logo">IndiVoyage</h1>
      <div className="menu-btn" onClick={() => setOpenSidebar(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>

      {/* HERO SECTION */}
      <section className="hero-section" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CENTER HEADING ON IMAGE */}
      {pageTitle && <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {pageTitle}
      </motion.h1>}

      {/* WHITE CONTENT BOX */}
      {showDescription && <motion.div
        className="hero-content-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {showDescription &&<motion.h3
          className="hero-small-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subheading}
        </motion.h3>}

        {showDescription && <motion.h2
          className="hero-bold-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {mainHeading}
        </motion.h2>}

        {showDescription && <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {description}
        </motion.p>}
      </motion.div>}
    </section>

      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
    </>
  );
};

export default Header;
