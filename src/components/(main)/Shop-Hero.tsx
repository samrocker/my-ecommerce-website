import React from "react";
import Image from "next/image";
import ProductImage from "../../../public/product-image.png";
import RatingStar from "../../../public/Rating-Start-icon.png";
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"



const ShopHero = () => {

  // async function Apidata() {
  //   try {
  //     const response = await fetch("'https://fakestoreapi.com/products/1")
  //     if (!response.ok) {
  //       throw new Error("Could not fetch resource");
  //       const Data = response
  //       const data = await response.json();
  //       const ProductName = data.title;
  //       const nameElement = document.getElementById("ProductName");
  //       const productThumbnail = data.thumbnail;
  //       const imgElement = document.getElementById("ProductThumbnail");   

  //         nameElement.textContent = ProductName;
  //         // Set the src attribute of the img element
  //         imgElement = productThumbnail;

  //   }
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
    
  // }
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="w-full flex flex-between lg:flex-row">
          <div className="flex-[1] hidden lg:flex-start flex-col gap-10">
            <div className=" flex-[1] w-full flex-between flex-col gap-3">
              <h1 className="text-xl font-bold">Categories</h1>
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
            <div className="flex-[1] w-full flex-between flex-col gap-5">
              <div className="flex-center w-full" >  
              <h1 className="text-xl font-bold">Price range</h1>
              </div>
              <div className="flex-start w-full px-10">
              <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
              </div>
            </div>
            <div className="flex-[1] flex-between flex-col gap-3"></div>
          </div>
          <div className="flex-[3] grid grid-cols-1 md:grid-cols-3 gap-10 lg:justify-start justify-center">
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
            <div className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
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
