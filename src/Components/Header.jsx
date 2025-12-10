import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";


const Header = ({
  image,
  heading,
  subHeading,
  description,
  showHeading = true,
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
      <section className="hero-section" style={{ backgroundImage: `url(${image})` }}>
        <div className="hero-overlay"></div>

        {/* CENTER TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-center"
        >
          {showHeading && (
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-title"
            >
              {heading}
            </motion.h1>
          )}

          {subHeading && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="hero-subtitle"
            >
              {subHeading}
            </motion.h2>
          )}
        </motion.div>

        {/* WHITE CONTENT BOX */}
        {showDescription && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="hero-content-box"
          >
            <h3 className="hero-small-title">Crafting Journeys That Feel Personal</h3>
            <h2 className="hero-bold-title">{heading}</h2>
            <p className="hero-description">{description}</p>
          </motion.div>
        )}
      </section>

      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
    </>
  );
};

export default Header;
