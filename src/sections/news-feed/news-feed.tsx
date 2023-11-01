"use client";
import React, { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/redux/hooks";

const NewsFeed: FC = () => {
  //states
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  //selectors
  const { categories, status } = useAppSelector((state) => state.Prod);
  const items = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home Decoration",
    "Furniture",
    "Tops",
    "Womens Dresses",
    "Womens Shoes",
    "Mens Shirts",
    "Mens Shoes",
    "Mens Watches",
    "Womens watches",
    "Womens Bags",
    "Womens Jewellery",
    "Sunglasses",
    "Automotive",
    "Motorcycle",
    "Lighting",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <motion.div
      className="flex items-center justify-center w-full h-full bg-secondary py-3"
      initial={{ rotateX: 0 }}
      animate={{ rotateX: 0 }}
      exit={{ rotateX: 180 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ rotateX: -180, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 180, opacity: 0 }}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default NewsFeed;
