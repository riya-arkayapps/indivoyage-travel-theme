import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import breadCrumbImg from '../Images/rajasthan-breadcrumb.webp';
import Header from "../Components/Header";
import Features from "../Components/Features";
import { RajasthanFaq, RajasthanFeatures, RajasthanLocations, RajasthanImages } from "../Data";
import HowWeWork from "../Components/HowWeWork";
import Testimonials from "../Components/Testimonials";
import Cta from "../Components/Cta";
import Story1 from '../Images/rajasthan-story-1.webp';
import Story2 from '../Images/rajasthan-story-2.webp';
import Story3 from '../Images/rajasthan-story-3.webp';

const LocationDetail=()=>{
     const [openIndex, setOpenIndex] = useState(0);
     const [openImg, setOpenImg] = useState(null);
    return(
        <>
         <Header 
        bgImage={breadCrumbImg}
      pageTitle="Explore Royal Rajasthan"
  subheading="Crafting Journeys That Feel Personal"
  mainHeading="Your story, your way."
  description="Rajasthan is where history, culture, and adventure come together in the most spectacular and captivating way. From majestic forts, ornate havelis, and royal palaces to vast golden deserts, bustling bazaars, and vibrant festivals, the state offers experiences that feel both timeless and unforgettable. Each city carries its own personality—Jaipur’s regal charm, Udaipur’s serene lakes, Jaisalmer’s desert magic, and Jodhpur’s blue lanes—all adding to Rajasthan’s irresistible appeal. Every corner whispers stories of kings, warriors, art, and tradition, making it a dream destination for travelers who crave heritage, beauty, and meaningful, immersive journeys that stay with them long after the trip ends."
  showDescription={true}/>

 {/**Feature cards section */}
        <section className="feature-cards-section">
            <div className="feature-cards">
      {RajasthanFeatures.map((i, index) => (
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

  <div className="destinations-section margin-class">
   <h3 className="section-subheading">
    Heritage hotspots that bring the state’s story to life.
   </h3>
   <h2 className="section-heading">Explore Rajasthan’s Iconic Cities</h2>
 
   <div className="destinations-cards">
     {RajasthanLocations.map((i, index) => (
       <motion.div
         className="destination-card"
         key={index}
         initial={{ opacity: 0, y: 30, scale: 0.95 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
         viewport={{ once: true, amount: 0.3 }}
         whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
       >
         <motion.img
           src={i.img}
           alt={i.title}
           initial={{ opacity: 0, scale: 1.1 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.7, delay: index * 0.15 }}
           viewport={{ once: true }}
         />
         <div className="card-content">
           <h3 className="section-heading">{i.title}</h3>
           <p>{i.desc}</p>
         </div>
       </motion.div>
     ))}
   </div>
 </div>
 
           {/**Experience travel section */}
       <Features />

        {/**Your Story Your way section */}
      <section className="rajasthan-journey-section">
      <motion.h3
        className="section-subheading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Crafting Journeys That Feel Personal
      </motion.h3>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Your story, your way.
      </motion.h2>

      <div className="rajasthan-timeline">

        {/* ITEM 1 */}
        <div className="rajasthan-timeline-item left">
          <motion.div
            className="rajasthan-content-box"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4>7 Days – Rajasthan Highlights</h4>
            <ul>
              <li><strong>Day 1: Jaipur – Royal Beginnings : </strong> Amber Fort • Hawa Mahal • Pink City markets</li>
              <li><strong>Day 2: Jaipur to Jodhpur :</strong> Mehrangarh Fort • Jaswant Thada • Clock Tower market</li>
              <li><strong>Day 3: Jodhpur Local Life :</strong> Blue City walk • Mandore Gardens</li>
              <li><strong>Day 4: Jodhpur to Jaisalmer : </strong>  Kuldhara ghost village • Gadisar Lake sunset</li>
              <li><strong>Day 5: Jaisalmer Desert Experience : </strong>  Jaisalmer Fort • Patwon ki Haveli • Camel safari • Dune camping</li>
              <li><strong>Day 6: Udaipur Arrival : </strong> City Palace • Evening boat ride at Lake Pichola</li>
              <li><strong>Day 7: Lakes & Culture : </strong>Saheliyon ki Bari • Local handicraft shopping • Departure</li>
            </ul>
          </motion.div>

          <motion.div
            className="rajasthan-image-card rotate-right"
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={Story1} alt="Mehrangarh Fort" />
          </motion.div>
        </div>

        {/* ITEM 2 */}
        <div className="rajasthan-timeline-item right">
          <motion.div
            className="rajasthan-image-card rotate-left"
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={Story2} alt="City Palace" />
          </motion.div>

          <motion.div
            className="rajasthan-content-box"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4>5 Days – Jaipur & Udaipur Journey</h4>
            <ul>
              <li><strong>Day 1: Jaipur Arrival & Forts :</strong> Amber Fort • Jal Mahal • Old City walk</li>
              <li><strong>Day 2: Heritage Trail : </strong> City Palace • Hawa Mahal • Jantar Mantar • Local markets</li>
              <li><strong>Day 3: Drive to Udaipur : </strong> En-route Chittorgarh Fort • Lakeside dinner in Udaipur</li>
              <li><strong>Day 4: City of Lakes Exploration : </strong> City Palace • Lake Pichola boat ride • Saheliyon ki Bari </li>
              <li><strong>Day 5: Art & Culture : </strong> Shilpgram crafts village • Vintage Car Museum • Departure</li>
            </ul>
          </motion.div>
        </div>

        {/* ITEM 3 */}
        <div className="rajasthan-timeline-item left">
          <motion.div
            className="rajasthan-content-box"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4>3 Days – Jaipur City Experience</h4>
            <ul>
              <li><strong>Day 1: Pink City Highlights : </strong> Amber Fort • Jal Mahal • Panna Meena Ka Kund • Local bazaar stroll</li>
              <li><strong>Day 2: Royal Palaces & Heritage : </strong> City Palace • Jantar Mantar • Hawa Mahal • Albert Hall Museum</li>
              <li><strong>Day 3: Culture & Local Life:  </strong> Nahargarh Fort sunrise • Jaipur food tour • Shopping for handicrafts</li>
            </ul>
          </motion.div>

          <motion.div
            className="rajasthan-image-card rotate-right"
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={Story3} alt="City Palace Jaipur" />
          </motion.div>
        </div>

      </div>
    </section>

        {/**Simple, Thoughtful, & Traveler-First */}
            <HowWeWork />

        
        {/**Testimonials Section */}
        <Testimonials />

         {/**Request a quote section */}
        <Cta />

        {/**FAQ Section */}
         <section className="faq-section">
      <h3 className="section-subheading">Your Questions, Answered</h3>
      <h2 className="section-heading">Essential Travel Information</h2>

      <div className="faq-grid">
        {RajasthanFaq.map((item, i) => {
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

    {/**Gallery Section */}
    <section className="gallery-section">
        <h3 className="section-subheading">The Essence of Rajasthan</h3>
      <h2 className="section-heading">Explore Rajasthan Through Our Lens</h2>
      <div className="gallery-grid">
          {RajasthanImages.map((item, index) => (
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
          <img src={openImg} alt="Rajasthan Full View" />
          <span className="close-btn">×</span>
        </div>
      )}

     

        </>
    )
}

export default LocationDetail;