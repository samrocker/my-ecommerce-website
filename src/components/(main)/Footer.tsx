import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import FacebookLogo from "../../../public/Facebook-Logo.png";
import YoutubeLogo from "../../../public/Youtube-logo.png";
import InstagramLogo from "../../../public/instagram-Logo.png";
import TwitterLogo from "../../../public/twitter-logo.png";

const Footer = () => {
  return (
    <section className=" w-full">
      <main className="max-w-[1380px] m-auto">
        <div className="px-5 py-10 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="flex-1 flex flex-col items-start justify-center gap-5">
            <Image src={Logo} alt="Logo" className="w-[6rem]" />
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-md font-normal">
                <Image src={FacebookLogo} alt="Facebook" height={25} width={25} className="object-cover" />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-md font-normal">
                <Image src={YoutubeLogo} alt="Youtube" height={25} width={25} className="object-cover" />
                Youtube
              </a>
              <a href="#" className="flex items-center gap-2 text-md font-normal">
                <Image src={InstagramLogo} alt="Instagram" height={25} width={25} className="object-cover" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-md font-normal">
                <Image src={TwitterLogo} alt="Twitter" height={25} width={25} className="object-cover" />
                Twitter
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-5">
            <h1 className="text-md font-bold">Get Started</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-md font-normal">Release Notes</li>
              <li className="text-md font-normal">Upgrade Guide</li>
              <li className="text-md font-normal">Browser Support</li>
              <li className="text-md font-normal">Dark Mode</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-5">
            <h1 className="text-md font-bold">Explore</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-md font-normal">Prototyping</li>
              <li className="text-md font-normal">Design Systems</li>
              <li className="text-md font-normal">Pricing</li>
              <li className="text-md font-normal">Security</li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-5">
            <h1 className="text-md font-bold">Community</h1>
            <ul className="flex flex-col gap-3">
              <li className="text-md font-normal">Discussion Forums</li>
              <li className="text-md font-normal">Upgrade Guide</li>
              <li className="text-md font-normal">Browser Support</li>
              <li className="text-md font-normal">Dark Mode</li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
