import React, { useState } from "react";
import { userData } from "../utils/UserData";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((currentIndex) => currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < userData.length - 1) {
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-screen">
      <h1 className="text-3xl text-gray-700 mb-10 font-extrabold pb-2 border-b-4 border-teal-400">
        Testimonials
      </h1>

      <div className="relative px-20">
        <button className="btn absolute top-[40%] left-0" onClick={prev}>
          prev
        </button>
        <div className="bg-white min-w-[600px] shadow-md border rounded-md p-t pb-0">
          <p className="text-center p-10">{userData[currentIndex].quote}</p>
          <p className="w-full rounded-md bg-teal-400 text-white font-bold text-center p-5">
            {userData[currentIndex].author}
          </p>
        </div>
        <button className="btn absolute top-[40%] right-0" onClick={next}>
          next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
