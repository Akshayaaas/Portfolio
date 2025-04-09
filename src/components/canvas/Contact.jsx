import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import SectionWrapper from "../../hoc";
import { slideIn } from "../../Utils/motion";

const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className='w-full max-w-lg mx-auto'
      >
        <div className="rounded-2xl p-8 flex flex-col items-center backdrop-blur-sm">
          <h3 className={`${styles.sectionHeadText} text-center`}>My Info.</h3>
          <div className="mt-8 space-y-6 w-full">
            <div className="text-center">
              <h4 className="text-white font-medium text-lg mb-2">Email</h4>
              <p className="text-secondary">akshayasrinivasan001@gmail.com</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-medium text-lg mb-2">Location</h4>
              <p className="text-secondary">Bengaluru, India</p>
            </div>
            <div className="text-center">
              <h4 className="text-white font-medium text-lg mb-2">Social</h4>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/atchaya-srinivasan-9b4b0521a" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
