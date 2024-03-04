import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function PulsatingLock() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }} // Define the pulsating animation
      transition={{
        duration: 1, // Duration of each pulsation
        repeat: Infinity, // Repeat the animation indefinitely
        ease: "easeInOut", // Easing function for smooth transitions
      }}
    >
      <Image src={require("../../public/images/lock.png")} />
    </motion.div>
  );
}

export default PulsatingLock;
