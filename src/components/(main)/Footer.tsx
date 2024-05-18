import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import FacebookLogo from "../../../public/Facebook-Logo.png";
import YoutubeLogo from "../../../public/Youtube-logo.png";
import InstagramLogo from "../../../public/instagram-Logo.png";
import TwitterLogo from "../../../public/twitter-logo.png";

const Footer = () => {
  return (
    <section className="bg-black/5 w-full">
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen lg:h-[40vh] px-5 w-full flex-between flex-col lg:flex-row py-5 gap-10">
          <div className="flex-[1] w-full flex flex-col items-start justify-center gap-10 md:gap-5">
            <Image src={Logo} alt="" className="w-[7rem]" />
            <h1 className="text-md font-normal flex gap-1">
              <Image
                src={FacebookLogo}
                alt=""
                height={25}
                width={25}
                className="object-cover"
              />
              Facebook
            </h1>
            <h1 className="text-md font-normal flex gap-1">
              <Image
                src={YoutubeLogo}
                alt=""
                height={25}
                width={25}
                className="object-cover"
              />
              Youtube
            </h1>
            <h1 className="text-md font-normal flex gap-1">
              <Image
                src={InstagramLogo}
                alt=""
                height={25}
                width={25}
                className="object-cover"
              />
              Instagram
            </h1>
            <h1 className="text-md font-normal flex gap-1">
              <Image
                src={TwitterLogo}
                alt=""
                height={25}
                width={25}
                className="object-cover"
              />
              Twiter
            </h1>
          </div>
          <div className="flex-[1] w-full flex flex-col items-start justify-center gap-10 md:gap-5">
            <h1 className="text-md font-bold">Get Started</h1>
            <h1 className="text-md font-normal">Release Notes</h1>
            <h1 className="text-md font-normal">Upgrade Guide</h1>
            <h1 className="text-md font-normal">Browser Support</h1>
            <h1 className="text-md font-normal">Dark Mode</h1>
          </div>
          <div className="flex-[1] w-full flex flex-col items-start justify-center gap-10 md:gap-5">
            <h1 className="text-md font-bold">Explore</h1>
            <h1 className="text-md font-normal">Prototyping</h1>
            <h1 className="text-md font-normal">Design systems</h1>
            <h1 className="text-md font-normal">Pricing</h1>
            <h1 className="text-md font-normal">Security</h1>
          </div>
          <div className="flex-[1] w-full flex flex-col items-start justify-center gap-10 md:gap-5">
            <h1 className="text-md font-bold">Community</h1>
            <h1 className="text-md font-normal">Discussion Forums   </h1>
            <h1 className="text-md font-normal">Upgrade Guide</h1>
            <h1 className="text-md font-normal">Browser Support</h1>
            <h1 className="text-md font-normal">Dark Mode</h1>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
