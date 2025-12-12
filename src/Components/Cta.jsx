import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="quote-section">
      <motion.h3
        className="section-subheading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        No Obligations
      </motion.h3>

      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Request a Quote
      </motion.h2>

      <motion.form
        className="quote-form"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {[
          { type: "text", placeholder: "Your Name (Required)" },
          { type: "email", placeholder: "Email Address (Required)" },
          { type: "text", placeholder: "Best Time to receive call" },
          { type: "text", placeholder: "Your Last Name (Required)" },
          { type: "text", placeholder: "Country" },
          { type: "textarea", placeholder: "Any Specific Request", className: "full-textarea" },
          { type: "text", placeholder: "Mobile Number" },
          { type: "number", placeholder: "Number of Travelers" },
          { type: "text", placeholder: "Alternative Number" },
          { type: "text", placeholder: "Travel Dates" },
        ].map((input, index) => (
          <motion.div
            key={index}
            className={input.className || ""}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {input.type === "textarea" ? (
              <textarea placeholder={input.placeholder} className={input.className}></textarea>
            ) : (
              <input type={input.type} placeholder={input.placeholder} />
            )}
          </motion.div>
        ))}

        <motion.button
          className="submit-btn"
          whileHover={{ scale: 1.05, backgroundColor: "#5d432f" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Cta;
