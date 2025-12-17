import React, {useState} from "react";
import { motion,AnimatePresence} from "framer-motion";

/**Image Import */
import breadCrumbImg from '../Images/house-boat-breadcrumb.webp';

/**Component Import */
import Header from "../Components/Header";
import Testimonials from "../Components/Testimonials";
import Cta from "../Components/Cta";

/**Data Import */
import { HouseboatFaq, HouseBoatFeatures, HouseBoatImages } from "../Data";

const AdventureDetail=()=>{
     const [openIndex, setOpenIndex] = useState(0);
    const [openImg, setOpenImg] = useState(null);
    return(
        <>
         <Header 
        bgImage={breadCrumbImg}
      pageTitle="Houseboat Stay"
  subheading="A serene journey where nature, comfort, and slow travel come together."
  mainHeading="Houseboat Adventure Drift Into a World of Calm"
  description="Experience the magic of living on water with a houseboat adventure that blends peaceful landscapes, gentle waves, and the timeless charm of floating life. Whether you’re gliding through still backwaters, drifting past lush greenery, or watching golden sunsets melt into the horizon from your private deck, every moment feels calm and surreal. Wake up to the soothing sounds of birds, soft ripples against the hull, and cool morning breeze carrying the scent of nature all around you. A houseboat stay isn’t just a getaway—it’s a slow, immersive journey that lets you disconnect from routine and reconnect with serenity. Perfect for travelers seeking tranquility, romance, meaningful experiences, or simply a refreshing break wrapped in nature’s quiet beauty, this adventure promises memories that linger long after the trip ends."
  showDescription={true}/>

  {/**Feature cards section */}
          <section className="feature-cards-section">
              <div className="feature-cards">
        {HouseBoatFeatures.map((i, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.2 }}
          >
  
           
              <h3 className="card-heading">{i.title}</h3>
              <p>{i.desc}</p>
         
  
          </motion.div>
        ))}
      </div>
       </section>

       {/**Days Detail Section */}
       <section className="itinerary-section">
      <motion.div
        className="itinerary-box"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="itinerary-grid">

          {/* LEFT */}
          <motion.div
            className="itinerary-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="section-subheading">A Glimpse Into Your Floating Retreat</h3>
            <h2 className="section-heading">
              Itinerary for Your Houseboat Escape
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="itinerary-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p><strong>Day 1 – Arrival & Cruise</strong><br />
              Arrive, check into your houseboat, enjoy a calm backwater cruise, and end the day with a serene sunset view.
            </p>

            <p><strong>Day 2 – Exploration & Local Life</strong><br />
              Take a guided canoe ride, interact with local communities, and enjoy freshly prepared on-board meals.
            </p>

            <p><strong>Day 3 – Sunrise & Departure</strong><br />
              Capture the morning light on the water before checking out and ending your peaceful retreat.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>

    {/**Essential Travel Details Section */}
    <section className="details-section">

      <motion.div
        className="details-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="section-subheading">Essential Travel Details</h3>
        <h2 className="section-heading">Everything You Need to Know</h2>
      </motion.div>

      <div className="details-cards">

  {/* CARD 1 — TABLE */}
  <motion.div
    className="details-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <div className="details-card-header table-header">
      <span>Season</span>
      <span>Experience</span>
    </div>

    <div className="details-table-row">
      <span>Winter</span>
      <span>Best weather & peak views</span>
    </div>

    <div className="details-table-row">
      <span>Monsoon</span>
      <span>Lush, scenic, peaceful</span>
    </div>

    <div className="details-table-row">
      <span>Summer</span>
      <span>Hot but budget-friendly</span>
    </div>
  </motion.div>

  {/* CARD 2 — LIST */}
  <motion.div
    className="details-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.15 }}
    viewport={{ once: true }}
  >
    <div className="details-card-header">What’s Included</div>
    <ul>
      <li>✓ Houseboat stay</li>
      <li>✓ All meals</li>
      <li>✓ Guided activities</li>
      <li>✓ Cruise timings</li>
      <li>✓ Safety equipment</li>
    </ul>
  </motion.div>

  {/* CARD 3 — LIST */}
  <motion.div
    className="details-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    viewport={{ once: true }}
  >
    <div className="details-card-header">Who Is This Adventure For?</div>
    <ul>
      <li>✓ Nature lovers</li>
      <li>✓ Photographers</li>
      <li>✓ Couples</li>
      <li>✓ Solo explorers</li>
      <li>✓ Wildlife enthusiasts</li>
    </ul>
  </motion.div>

</div>
    </section>

        {/**Gallery Section */}
           <section className="gallery-section">
               <h3 className="section-subheading">The Essence of HouseBoat</h3>
             <h2 className="section-heading">Explore HouseBoat Through Our Lens</h2>
             <div className="gallery-grid">
                 {HouseBoatImages.map((item, index) => (
                   <div
                     key={index}
                     className="gallery-item"
                     onClick={() => setOpenImg(item.img)}
                   >
                     <img src={item.img} alt={`Rajasthan ${index + 1}`} />
                   </div>
                 ))}
               </div>
           </section>
       
           {/* Image Modal */}
             {openImg && (
               <div className="gallery-modal" onClick={() => setOpenImg(null)}>
                 <img src={openImg} alt="" />
                 <span className="close-btn">×</span>
               </div>
             )}
       
        {/**Testimonials Section */}
        <Testimonials />

        {/**FAQ Section */}
         <section className="faq-section">
      <h3 className="section-subheading">Your Questions, Answered</h3>
      <h2 className="section-heading">Essential Travel Information</h2>

      <div className="faq-grid">
        {HouseboatFaq.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              className={`faq-card ${isOpen ? "open" : ""}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="faq-header">
                <h4>{item.q}</h4>

                <motion.span
                  className="icon"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.p
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                      layout
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>

     {/**Request a quote section */}
        <Cta />

            
        </>
    )
}

export default AdventureDetail;