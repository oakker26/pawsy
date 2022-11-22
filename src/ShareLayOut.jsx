import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { motion } from "framer-motion";
import React from 'react'
import Footer from "./components/Footer/Footer";

const ShareLayOut = () => {
  return (
      <motion.div initial={{
        opacity: 0,
        translateY: -500,
      translateX:-500}}
      animate={{
        opacity: 1,
        translateY: 0,
        translateX:0
        , transition: { duration: 0.4 }
      }}
      exit={{ opacity: 0, translateY:500,translateX:500 ,transition:{duration:0.4}}} >
      <div className="bg-[linear-gradient(360deg,#1b2963,#152154)]">
      <Navbar />
        
        </div>
      <div className="bg-[linear-gradient(360deg,#1b2963,#152154)]">
      <div className="container  pl-0">
      <Footer/>
      </div>
      </div>
      <Outlet />
      </motion.div>
  )
}

export default ShareLayOut