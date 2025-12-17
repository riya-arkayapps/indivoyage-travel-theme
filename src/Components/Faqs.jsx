/**Important Imports useful in code */
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**Data Import */
import { faqs } from "../Data";

const Faqs=()=>{
    const [openIndex, setOpenIndex] = useState(0);
    return(
        <>
        <section className="faq-section">
      <h3 className="section-subheading">Your Questions, Answered</h3>
      <h2 className="section-heading">Essential Travel Information</h2>

      <div className="faq-grid">
        {faqs.map((item, i) => {
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
        </>
    )
}

export default Faqs;