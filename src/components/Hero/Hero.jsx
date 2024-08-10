import React, { useState, useEffect } from "react";
import watch1 from "../../assets/watch/blue-watch.png";
import watch2 from "../../assets/watch/yellow-watch.png";
import watch3 from "../../assets/watch/orange-watch.png";

const ImageList = [
  {
    id: 1,
    img: watch1,
    price: "12.99",
    tag: "New",
    title: "Next Gen Blue Watch",
    description:
      "Experience the future of smartwatches with cutting-edge technology, sleek design, and unmatched performance that keeps you connected all day long.",
  },
  {
    id: 2,
    img: watch2,
    price: "13.99",
    tag: "Sale",
    title: "Best & Smart Yellow Watch",
    description:
      "Elevate your style with this vibrant yellow smartwatch featuring advanced health tracking, notifications, and a stunning display that stands out.",
  },
  {
    id: 3,
    img: watch3,
    price: "14.99",
    tag: "Hot",
    title: "Apple Ultra Smart Watch 2",
    description:
      "The ultimate smartwatch for athletes and adventurers. Built tough with premium materials and packed with features for peak performance.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [selectedWatch, setSelectedWatch] = useState(ImageList[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const handleWatchChange = (item) => {
    if (item.id === selectedWatch.id) return;

    setSlideDirection(item.id > selectedWatch.id ? "right" : "left");
    setIsAnimating(true);

    setTimeout(() => {
      setSelectedWatch(item);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <div className="min-h-[600px] sm:min-h-[700px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex justify-center items-center dark:text-white duration-200 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="h-[500px] w-[500px] lg:h-[700px] lg:w-[700px] bg-primary/30 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10 blur-3xl"></div>
        <div className="h-[300px] w-[300px] bg-secondary/20 absolute -bottom-32 -left-32 rounded-full -z-10 blur-3xl"></div>

        <div className="container pb-8 sm:pb-0 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Text content section */}
            <div className="flex flex-col justify-center gap-4 sm:gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <div className="overflow-hidden">
                <h1
                  key={selectedWatch.id}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-slideInUp"
                >
                  {selectedWatch.title}
                </h1>
              </div>

              <div className="overflow-hidden">
                <p
                  key={selectedWatch.description}
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed animate-slideInUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  {selectedWatch.description}
                </p>
              </div>

              <div
                className="animate-slideInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:scale-105 active:scale-95 duration-200 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl font-medium text-sm sm:text-base"
                >
                  Order Now
                </button>
              </div>

              {/* Watch selection cards */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-4">
                {ImageList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleWatchChange(item)}
                    className={`
                      flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 sm:p-4 
                      bg-white dark:bg-gray-800 rounded-2xl cursor-pointer 
                      transition-all duration-300 hover:scale-105 hover:shadow-xl
                      ${selectedWatch.id === item.id
                        ? "ring-2 ring-primary shadow-lg scale-105"
                        : "shadow-md hover:shadow-lg"
                      }
                    `}
                  >
                    <div className="relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      />
                      <span className={`
                        absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold text-white
                        ${item.tag === "New" ? "bg-blue-500" :
                          item.tag === "Sale" ? "bg-red-500" : "bg-orange-500"}
                      `}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                      <p className="text-lg sm:text-xl font-bold text-primary">${item.price}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Best Price</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image section with animation */}
            <div className="min-h-[350px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="relative w-full h-[350px] sm:h-[450px] flex justify-center items-center">
                {/* Animated background circle */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
                </div>

                {/* Watch image with slide animation */}
                <div className={`
                  relative z-10 transition-all duration-500 ease-out
                  ${isAnimating
                    ? slideDirection === "right"
                      ? "translate-x-full opacity-0"
                      : "-translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                  }
                `}>
                  <img
                    key={selectedWatch.id}
                    src={selectedWatch.img}
                    alt={selectedWatch.title}
                    className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Floating price tag */}
                <div className="absolute top-8 right-8 sm:top-12 sm:right-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 sm:p-4 animate-float">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Starting at</p>
                  <p className="text-2xl sm:text-3xl font-bold text-primary">${selectedWatch.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;