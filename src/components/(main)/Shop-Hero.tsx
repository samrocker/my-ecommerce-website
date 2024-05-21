import React from "react";
import Image from "next/image";
import ProductImage from "../../../public/product-image.png";
import RatingStar from "../../../public/Rating-Start-icon.png";
import { Checkbox } from "@/components/ui/checkbox"


const ShopHero = () => {
  return (
    <section>
      <main className="max-w-[86.25rem] m-auto">
        <div className="md:h-screen w-full flex flex-between lg:flex-row ">
          <div className="flex-[1] hidden lg:flex-between flex-col gap-10 py-5">
            <div className="flex-[1] flex-between flex-col gap-3">
              <h1 className="text-xl">Categories</h1>
              <div className="flex-start w-full gap-3">
              <Checkbox />
              <h1 className="text-[#4B5563] text-sm font-medium">Men's fashion</h1>
              </div>
              <div className="flex-start w-full gap-3">
              <Checkbox />
              <h1 className="text-[#4B5563] text-sm font-medium">Women's fashion</h1>
              </div>
              <div className="flex-start w-full gap-3">
              <Checkbox />
              <h1 className="text-[#4B5563] text-sm font-medium">Kids fashion</h1>
              </div>
            </div>
            <div className="flex-[1] flex-start flex-col gap-3"></div>
            <div className="flex-[1] flex-between flex-col gap-3"></div>
          </div>
          <div className="flex-[3] grid grid-cols-1 items-center place-content-center md:grid-cols-3 gap-5 lg:justify-start justify-center p-5">
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] w-full flex-between">
                <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                  <h1 className="text-sm font-bold">Black Automatic Watch</h1>
                  <p className="text-[#4B5563] text-sm font-medium">
                    Accessories
                  </p>
                  <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                    <Image src={RatingStar} alt="" height={17} width={17} />
                    4.9 (98)
                  </h1>
                </div>
                <div className="flex-[1] flex-end flex-col text-right">
                  <h1 className="text-md font-bold">$169.99</h1>
                  <p className="text-[#4B5563] text-sm font-medium ">$199.99</p>
                </div>
              </div>
            </div>
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] w-full flex-between">
                <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                  <h1 className="text-sm font-bold">Black Automatic Watch</h1>
                  <p className="text-[#4B5563] text-sm font-medium">
                    Accessories
                  </p>
                  <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                    <Image src={RatingStar} alt="" height={17} width={17} />
                    4.9 (98)
                  </h1>
                </div>
                <div className="flex-[1] flex-end flex-col text-right">
                  <h1 className="text-md font-bold">$169.99</h1>
                  <p className="text-[#4B5563] text-sm font-medium ">$199.99</p>
                </div>
              </div>
            </div>
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] w-full flex-between">
                <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                  <h1 className="text-sm font-bold">Black Automatic Watch</h1>
                  <p className="text-[#4B5563] text-sm font-medium">
                    Accessories
                  </p>
                  <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                    <Image src={RatingStar} alt="" height={17} width={17} />
                    4.9 (98)
                  </h1>
                </div>
                <div className="flex-[1] flex-end flex-col text-right">
                  <h1 className="text-md font-bold">$169.99</h1>
                  <p className="text-[#4B5563] text-sm font-medium ">$199.99</p>
                </div>
              </div>
            </div>
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] w-full flex-between">
                <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                  <h1 className="text-sm font-bold">Black Automatic Watch</h1>
                  <p className="text-[#4B5563] text-sm font-medium">
                    Accessories
                  </p>
                  <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                    <Image src={RatingStar} alt="" height={17} width={17} />
                    4.9 (98)
                  </h1>
                </div>
                <div className="flex-[1] flex-end flex-col text-right">
                  <h1 className="text-md font-bold">$169.99</h1>
                  <p className="text-[#4B5563] text-sm font-medium ">$199.99</p>
                </div>
              </div>
            </div>
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] w-full flex-between">
                <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                  <h1 className="text-sm font-bold">Black Automatic Watch</h1>
                  <p className="text-[#4B5563] text-sm font-medium">
                    Accessories
                  </p>
                  <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                    <Image src={RatingStar} alt="" height={17} width={17} />
                    4.9 (98)
                  </h1>
                </div>
                <div className="flex-[1] flex-end flex-col text-right">
                  <h1 className="text-md font-bold">$169.99</h1>
                  <p className="text-[#4B5563] text-sm font-medium ">$199.99</p>
                </div>
              </div>
            </div>
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
              <div className="flex-[1] w-full flex-center">
                <Image
                  src={ProductImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-[1] w-full flex-between">
                <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                  <h1 className="text-sm font-bold">Black Automatic Watch</h1>
                  <p className="text-[#4B5563] text-sm font-medium">
                    Accessories
                  </p>
                  <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                    <Image src={RatingStar} alt="" height={17} width={17} />
                    4.9 (98)
                  </h1>
                </div>
                <div className="flex-[1] flex-end flex-col text-right">
                  <h1 className="text-md font-bold">$169.99</h1>
                  <p className="text-[#4B5563] text-sm font-medium ">$199.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ShopHero;
