import React, {useState} from "react";
import { motion} from "framer-motion";
import breadCrumbImg from '../Images/house-boat-breadcrumb.webp';
import Header from "../Components/Header";
import { HouseBoatFeatures, HouseBoatImages } from "../Data";
import Testimonials from "../Components/Testimonials";

const AdventureDetail=()=>{
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
                 <img src={openImg} alt="Rajasthan Full View" />
                 <span className="close-btn">×</span>
               </div>
             )}
       
        {/**Testimonials Section */}
        <Testimonials />
            
        </>
    )
}

export default AdventureDetail;