"use client"
import React, { useState,useId } from "react";
import { items } from "../contexts";
import { GoHeart } from "react-icons/go";
import Image from "next/image"

const ProductNavigation = () => {
const productid=useId()
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4 pl-8">Articles similaires</h2>
      <div className="flex items-center justify-between">
        {/* left Navigation */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white z-20 p-2 rounded-full"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div
          className="flex gap-x-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 lg:w-[21.484rem] lg:h-[28.516rem] relative "
            >
                <Image className="absolute" src={item.image} alt={productid} layout="fill"
            objectFit="contain" />
                <div >
                <h3 className="mt-2 font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.price}</p>
                    <p className="text-blue-600">{item.pieces}</p>
                </div>
            </div>
          ))}
        </div>

        {/* Right Navigation */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductNavigation;
