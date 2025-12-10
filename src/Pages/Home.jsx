import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { destinations, itineraries } from "../Data";
import breadCrumbImg from '../Images/home-breadcrumb.webp';
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

const Home=()=>{
    return(
        <>
        <Header 
        image={breadCrumbImg}
      showHeading={false}
      showDescription={false}/>
      
      {/**India's Story come alive section */}
      <div className="bg-wrapper">
      <div className="home-about-section">
        <div className="img-section">
          <img src={aboutImg} alt=""></img>
        </div>
        <div className="text-section">
          <h3 className="section-subheading">Heritage and adventures, curated for your journey</h3>
          <h2 className="section-heading">Where India’s Stories Come Alive</h2>
          <p>Heritage and adventures, curated for your journey. Where India’s stories come alive. Discover India through an immersive gateway designed to connect you with the nation’s most iconic landscapes, cultures, and experiences. Every region holds a narrative—ancient temples whispering centuries of history, bustling markets alive with color and tradition, tranquil coastlines offering moments of serenity, and thrilling adventures that awaken your spirit of exploration. This platform brings all these elements together in a thoughtfully designed, seamless interface that intuitively adapts to your interests and travel style. Whether you’re drawn to timeless heritage, modern adventures, natural wonders, or hidden gems tucked away from the usual paths, you’ll find a curated journey crafted to help you explore India with depth, clarity, and a renewed sense of wonder. Let every destination inspire you, guide you, and draw you closer to the true essence of India—rich, diverse, and endlessly captivating.</p>
          <h3 className="bottom-btns-heading">Handpicked journeys that blend heritage with thrill.</h3>
          <ul><li>Jaipur,Rajasthan</li>
          <li>Rishikesh,Uttrakhand</li>
          <li>Leh,Ladakh</li>
          <li>Spiti Valley, Himachal Pradesh</li>
          <li>Varanasi,Uttar Pradesh</li></ul>
        </div>
      </div></div>

      {/**Destinations Section */}
      <div className="bg-wrapper">
      <div className="destinations-section">
        <h3 className="section-subheading">Discover Iconic Destinations</h3>
        <h2 className="section-heading">Explore India Through Every Lens</h2>
        <div className="destinations-cards">
        {destinations.map(( i) => (
        <div
          className="destination-card"
        >
          <img src={i.img} alt={i.title}></img>
          <div className="card-content">
          <h3 className="section-heading">{i.title}</h3>
          <p>{i.desc}</p></div>
        </div>
      ))}
        </div>
        </div>
        </div>

        {/**Royal Rajasthan Section */}
        <div className="bg-wrapper">
        <div className="rajasthan-section">
          <div className="rajasthan-content">
            <h3 className="section-subheading">Discover Iconic Destinations</h3>
            <h2 className="section-heading">Royal Rajasthan</h2>
            <p>A land where history, artistry, and grandeur come together to create an experience unlike any other. Known for its majestic forts, opulent palaces, and vibrant desert landscapes, the state captures the true essence of India’s royal past. Every city offers a unique story—Jaipur impresses with its pink façades and architectural wonders, Udaipur mesmerizes with serene lakes and marble palaces, while Jodhpur stands proudly with its blue houses and the mighty Mehrangarh Fort watching over the city. Further west, Jaisalmer rises like a golden mirage in the Thar Desert, offering unforgettable moments through camel safaris, shimmering dunes, and its iconic living fort. Beyond the sights, Rajasthan’s culture breathes life into every journey. From folk music and dance to traditional handicrafts, colourful markets, and flavourful Rajasthani cuisine, the state ensures every traveller is immersed in authenticity. Whether you seek heritage, adventure, or cultural immersion, Royal Rajasthan offers a journey filled with unforgettable stories, timeless art, and experiences that stay with you long after you leave.</p>
            <Link>Know More</Link>
            <Link>Book an Royal Experience → </Link>
          </div>
          <div className="rajasthan-img">
            <img src={RajasthanImg} alt='Royal Rajasthan'></img>
            <img src={CamelImg} alt='Royal Rajasthan'></img>
          </div>
        </div>
        </div>

        {/* Trending Activities Section */}
<div className="trending-section">
  <h3 className="section-subheading">Must-do activities across India.</h3>
  <h2 className="section-heading">Trending Experiences</h2>

  <div className="trending-strip">
    {[
      { img: activity1, title: "Hot air Ballooning" },
      { img: activity2, title: "Houseboat Stay" },
      { img: activity3, title: "Jeep Safari" },
      { img: activity4, title: "Trekking" },
      { img:  activity5, title: "Scuba Diving" },
      { img: activity6, title: "Desert Camping" },
      { img: activity7, title: "Backwater Cruises" },
      { img: activity8, title: "Caving Adventures" },
      { img: activity9, title: "Wildlife" },
    ].map((item, i) => (
      <div className="trending-card" key={i}>
        <img src={item.img} alt={item.title} />
        <p>{item.title}</p>
      </div>
    ))}
  </div>
</div>

      {/**Itineraries Section */}
      <div className="bg-wrapper">
      <div className="destinations-section">
        <h3 className="section-subheading">Ready-made routes for effortless travel.</h3>
        <h2 className="section-heading">Classic Curated Itineraries</h2>
        <div className="destinations-cards">
        {itineraries.map(( i) => (
        <div
          className="destination-card"
        >
          <img src={i.img} alt={i.title}></img>
          <div className="card-content">
          <h3 className="section-heading">{i.title}</h3>
          <p>{i.desc}</p></div>
        </div>
      ))}
        </div>
        </div>
        </div>

      </>
    )
}

export default Home;