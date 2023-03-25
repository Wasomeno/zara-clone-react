import { useMotionValueEvent, useScroll } from "framer-motion";
import { Carousel } from "../components/Carousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-slate-900 relative overflow-y-scroll">
      <Carousel />
    </div>
  );
};
