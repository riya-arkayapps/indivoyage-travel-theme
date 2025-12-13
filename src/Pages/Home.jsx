import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { destinations, itineraries, seasons } from "../Data";
import breadCrumbImg from '../Images/home-breadcrumb.png';
import aboutImg from '../Images/home-about.webp';
import RajasthanImg from '../Images/home-rajasthan.webp';
import CamelImg from '../Images/home-camel.webp';
import activity1 from '../Images/activity-1.webp';
import activity2 from '../Images/activity-2.webp';
import activity3 from '../Images/activity-3.webp';
import activity4 from '../Images/activity-4.webp';
import activity5 from '../Images/activity-5.webp';
import activity6 from '../Images/activity-5.webp';
import activity7 from '../Images/activity-7.webp';
import activity8 from '../Images/activity-8.webp';
import activity9 from '../Images/activity-5.webp';
import pin from '../Images/pin.png';
import Testimonials from "../Components/Testimonials";
import Cta from "../Components/Cta";
import Features from "../Components/Features";

const Home=()=>{
    return(
        <>
        <Header 
        bgImage={breadCrumbImg}
      showDescription={false}
      className='home-hero'/>
      
      {/**India's Story come alive section */}
       <div className="bg-wrapper">
      <div className="home-about-section">

        {/* IMAGE SECTION */}
        <motion.div
          className="img-section"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={aboutImg} alt="" />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          className="text-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.h3
            className="section-subheading"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Heritage and adventures, curated for your journey
          </motion.h3>

          <motion.h2
            className="section-heading"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Where India’s Stories Come Alive
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
           Heritage and adventures, curated for your journey. Where India’s stories come alive. Discover India through an immersive gateway designed to connect you with the nation’s most iconic landscapes, cultures, and experiences. Every region holds a narrative—ancient temples whispering centuries of history, bustling markets alive with color and tradition, tranquil coastlines offering moments of serenity, and thrilling adventures that awaken your spirit of exploration. This platform brings all these elements together in a thoughtfully designed, seamless interface that intuitively adapts to your interests and travel style. Whether you’re drawn to timeless heritage, modern adventures, natural wonders, or hidden gems tucked away from the usual paths, you’ll find a curated journey crafted to help you explore India with depth, clarity, and a renewed sense of wonder. Let every destination inspire you, guide you, and draw you closer to the true essence of India—rich, diverse, and endlessly captivating.
          </motion.p>

          <motion.h3
            className="bottom-btns-heading"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            Handpicked journeys that blend heritage with thrill.
          </motion.h3>

          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {["Jaipur, Rajasthan", "Rishikesh, Uttarakhand", "Leh, Ladakh", "Spiti Valley, Himachal Pradesh", "Varanasi, Uttar Pradesh"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  {item}
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.div>
      </div>
    </div>

      {/**Destinations Section */}
      <div className="bg-wrapper">
  <div className="destinations-section">

    {/* HEADINGS */}
    <motion.h3
      className="section-subheading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Discover Iconic Destinations
    </motion.h3>

    <motion.h2
      className="section-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Explore India Through Every Lens
    </motion.h2>

   
    <div className="destinations-cards">
      {destinations.slice(0,3).map((i, index) => (
        <motion.div
          className="destination-card"
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.img
            src={i.img}
            alt={i.title}
            initial={{ scale: 1.05, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <div
            className="card-content"
          >
            <h3 className="section-heading">{i.title}</h3>
            <p>{i.desc}</p>
          </div>

        </motion.div>
      ))}
    </div>

  </div>
</div>

        {/**Royal Rajasthan Section */}
        <div className="bg-wrapper">
        <motion.div
  className="rajasthan-section"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <motion.div
    className="rajasthan-content"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h3 className="section-subheading">Discover Iconic Destinations</h3>
    <h2 className="section-heading">Royal Rajasthan</h2>
    <p>A land where history, artistry, and grandeur come together to create an experience unlike any other. Known for its majestic forts, opulent palaces, and vibrant desert landscapes, the state captures the true essence of India’s royal past. Every city offers a unique story—Jaipur impresses with its pink façades and architectural wonders, Udaipur mesmerizes with serene lakes and marble palaces, while Jodhpur stands proudly with its blue houses and the mighty Mehrangarh Fort watching over the city. Further west, Jaisalmer rises like a golden mirage in the Thar Desert, offering unforgettable moments through camel safaris, shimmering dunes, and its iconic living fort. Beyond the sights, Rajasthan’s culture breathes life into every journey. From folk music and dance to traditional handicrafts, colourful markets, and flavourful Rajasthani cuisine, the state ensures every traveller is immersed in authenticity. Whether you seek heritage, adventure, or cultural immersion, Royal Rajasthan offers a journey filled with unforgettable stories, timeless art, and experiences that stay with you long after you leave.</p>
    <Link>Know More</Link>
    <Link>Book an Royal Experience → </Link>
  </motion.div>

  <motion.div
    className="rajasthan-img"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <img src={RajasthanImg} alt='Royal Rajasthan' />
    <img src={CamelImg} alt='Royal Rajasthan' />
  </motion.div>
</motion.div>
        </div>

        {/* Trending Activities Section */}
        <div className="trending-bg">
<div className="trending-section">
  <h3 className="section-subheading">Must-do activities across India.</h3>
  <h2 className="section-heading">Trending Experiences</h2>

  {/* CURVED DOTTED LINE SVG */}
  <svg className="curve-line" viewBox="0 0 1440 200" preserveAspectRatio="none">
    <path
      d="M0 120 C 200 60, 400 180, 600 120 C 800 60, 1000 180, 1440 120"
      stroke="black"
      strokeWidth="3"
      strokeDasharray="10 10"
      fill="transparent"
    />
  </svg>

  <div className="trending-strip">
    {[
      { img: activity1, title: "Hot air Ballooning" },
      { img: activity2, title: "Houseboat Stay" },
      { img: activity3, title: "Jeep Safari" },
      { img: activity4, title: "Trekking" },
      { img: activity5, title: "Scuba Diving" },
      { img: activity6, title: "Desert Camping" },
      { img: activity7, title: "Backwater Cruises" },
      { img: activity8, title: "Caving Adventures" },
      { img: activity9, title: "Wildlife" },
    ].map((item, i) => {
        const even = i % 2 !== 0; // 2,4,6,8
        return (
          <motion.div
            className={`trending-card card-${i}`}
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <img src={pin} className="pin" alt="pin" />

            {even && <p className="label-top">{item.title}</p>}

            <div className="photo-frame">
              <img src={item.img} alt={item.title} />
            </div>

            {!even && <p>{item.title}</p>}
          </motion.div>
        );
      })}
  </div>
</div>
</div>


      {/**Itineraries Section */}
     <div className="destinations-section margin-class">
  <h3 className="section-subheading">
    Ready-made routes for effortless travel.
  </h3>
  <h2 className="section-heading">Classic Curated Itineraries</h2>

  <div className="destinations-cards">
    {itineraries.map((i, index) => (
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

      {/**Dream trip Section */}
      <div className="dream-section">
  <div className="dream-overlay"></div>

  <motion.h2
    className="dream-heading section-heading"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    Let's Make Your Dream Trip Happen
  </motion.h2>

  <motion.p
    className="dream-text"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    Explore the perfect itinerary curated just for you, and start your journey
    with ease, comfort, and the assurance that every moment of your travel is
    thoughtfully planned.
  </motion.p>

  <motion.button
    className="dream-btn"
    whileHover={{ scale: 1.05, backgroundColor: "rgba(234,193,123,0.2)" }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    Book Now
  </motion.button>
</div>


<div className="seasons-section margin-class">
  <div className="heading-ul-wrapper">
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
    >
      {["Winter","Monsoon","Summer"].map((item, index) => (
        <motion.li
          key={index}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>

    <div className="heading-wrapper">
      <motion.h3
        className="section-subheading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Your quick guide to where to go right now.
      </motion.h3>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Where to Go This Season
      </motion.h2>
    </div>
  </div>

  <div className="destinations-cards">
    {seasons.map((i, index) => (
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


        {/**Testimonials Section */}
        <Testimonials />

        {/**Request a quote section */}
        <Cta />
      </>
    )
}

export default Home;