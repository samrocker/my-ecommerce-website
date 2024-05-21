import React from "react";
import Image from "next/image";
import bannerImage from "../../../public/bottom-banner-homepage.png";

const BannerSection = () => {
  return (
    <section className="hidden md:flex">
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-center">
          <div className="h-[20rem] lg:h-[25rem] w-[90%] md:w-[54rem] lg:w-[60rem] relative">
            <Image
              src={bannerImage}
              alt=""
              className="w-full h-full object-cover absolute top-0 z-[-1]"
            />
            <div className="h-full w-full flex flex-col items-start justify-center md:px-10 lg:px-20 gap-5">
              <p className="text-sm md:text-base text-[#4B5563] font-bold">
                100% Original Products
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                The All New Fashion <br />
                Collection Items
              </h1>
              <p className="text-sm md:text-base text-[#4B5563] font-bold">Starting from: $59.99</p>
              <button className="px-5 md:px-7 py-3 md:py-4 bg-black text-sm md:text-base font-medium text-white rounded-3xl">SHOP NOW</button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BannerSection;
