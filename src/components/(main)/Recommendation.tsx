'use client'
import React from "react";
import Image from "next/image";
import ProductImage from "../../../public/product-image.png";
import RatingStar from "../../../public/Rating-Start-icon.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  options?: EmblaOptionsType;
};

const Recommendation = (props: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col">
          <div className="flex-[0.5] w-full flex-start px-3">
            <h1 className="text-2xl font-bold flex gap-1">
              Recommendations <span className="hidden md:flex">.</span>
              <span className="text-[#4B5563] hidden md:flex">
                Best matching products for you
              </span>
            </h1>
          </div>
          <div className="flex-[3] w-full">
            <Carousel
            className="max-w-[1380px] m-auto w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                  <div className="h-[450px] w-[300px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
                    <div className="flex-[1] w-full flex-center">
                      <Image
                        src={ProductImage}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] w-full flex-between">
                      <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                        <h1 className="text-sm font-bold">
                          Black Automatic Watch
                        </h1>
                        <p className="text-[#4B5563] text-sm font-medium">
                          Accessories
                        </p>
                        <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                          <Image
                            src={RatingStar}
                            alt=""
                            height={17}
                            width={17}
                          />
                          4.9 (98)
                        </h1>
                      </div>
                      <div className="flex-[1] flex-end flex-col text-right">
                        <h1 className="text-md font-bold">$169.99</h1>
                        <p className="text-[#4B5563] text-sm font-medium ">
                          $199.99
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                  <div className="h-[450px] w-[300px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
                    <div className="flex-[1] w-full flex-center">
                      <Image  
                        src={ProductImage}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] w-full flex-between">
                      <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                        <h1 className="text-sm font-bold">
                          Black Automatic Watch
                        </h1>
                        <p className="text-[#4B5563] text-sm font-medium">
                          Accessories
                        </p>
                        <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                          <Image
                            src={RatingStar}
                            alt=""
                            height={17}
                            width={17}
                          />
                          4.9 (98)
                        </h1>
                      </div>
                      <div className="flex-[1] flex-end flex-col text-right">
                        <h1 className="text-md font-bold">$169.99</h1>
                        <p className="text-[#4B5563] text-sm font-medium ">
                          $199.99
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                  <div className="h-[450px] w-[300px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
                    <div className="flex-[1] w-full flex-center">
                      <Image
                        src={ProductImage}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] w-full flex-between">
                      <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                        <h1 className="text-sm font-bold">
                          Black Automatic Watch
                        </h1>
                        <p className="text-[#4B5563] text-sm font-medium">
                          Accessories
                        </p>
                        <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                          <Image
                            src={RatingStar}
                            alt=""
                            height={17}
                            width={17}
                          />
                          4.9 (98)
                        </h1>
                      </div>
                      <div className="flex-[1] flex-end flex-col text-right">
                        <h1 className="text-md font-bold">$169.99</h1>
                        <p className="text-[#4B5563] text-sm font-medium ">
                          $199.99
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                  <div className="h-[450px] w-[300px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
                    <div className="flex-[1] w-full flex-center">
                      <Image
                        src={ProductImage}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] w-full flex-between">
                      <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                        <h1 className="text-sm font-bold">
                          Black Automatic Watch
                        </h1>
                        <p className="text-[#4B5563] text-sm font-medium">
                          Accessories
                        </p>
                        <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                          <Image
                            src={RatingStar}
                            alt=""
                            height={17}
                            width={17}
                          />
                          4.9 (98)
                        </h1>
                      </div>
                      <div className="flex-[1] flex-end flex-col text-right">
                        <h1 className="text-md font-bold">$169.99</h1>
                        <p className="text-[#4B5563] text-sm font-medium ">
                          $199.99
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                  <div className="h-[450px] w-[300px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
                    <div className="flex-[1] w-full flex-center">
                      <Image
                        src={ProductImage}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] w-full flex-between">
                      <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                        <h1 className="text-sm font-bold">
                          Black Automatic Watch
                        </h1>
                        <p className="text-[#4B5563] text-sm font-medium">
                          Accessories
                        </p>
                        <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                          <Image
                            src={RatingStar}
                            alt=""
                            height={17}
                            width={17}
                          />
                          4.9 (98)
                        </h1>
                      </div>
                      <div className="flex-[1] flex-end flex-col text-right">
                        <h1 className="text-md font-bold">$169.99</h1>
                        <p className="text-[#4B5563] text-sm font-medium ">
                          $199.99
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                  <div className="h-[450px] w-[300px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
                    <div className="flex-[1] w-full flex-center">
                      <Image
                        src={ProductImage}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] w-full flex-between">
                      <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                        <h1 className="text-sm font-bold">
                          Black Automatic Watch
                        </h1>
                        <p className="text-[#4B5563] text-sm font-medium">
                          Accessories
                        </p>
                        <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                          <Image
                            src={RatingStar}
                            alt=""
                            height={17}
                            width={17}
                          />
                          4.9 (98)
                        </h1>
                      </div>
                      <div className="flex-[1] flex-end flex-col text-right">
                        <h1 className="text-md font-bold">$169.99</h1>
                        <p className="text-[#4B5563] text-sm font-medium ">
                          $199.99
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center md:basis-1/3 lg:basis-1/4">
                  <div className="h-[450px] w-[300px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1">
                    <div className="flex-[1] w-full flex-center">
                      <Image
                        src={ProductImage}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex-[1] w-full flex-between">
                      <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                        <h1 className="text-sm font-bold">
                          Black Automatic Watch
                        </h1>
                        <p className="text-[#4B5563] text-sm font-medium">
                          Accessories
                        </p>
                        <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                          <Image
                            src={RatingStar}
                            alt=""
                            height={17}
                            width={17}
                          />
                          4.9 (98)
                        </h1>
                      </div>
                      <div className="flex-[1] flex-end flex-col text-right">
                        <h1 className="text-md font-bold">$169.99</h1>
                        <p className="text-[#4B5563] text-sm font-medium ">
                          $199.99
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-1" />
              <CarouselNext className="absolute right-1" />
            </Carousel>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Recommendation;
