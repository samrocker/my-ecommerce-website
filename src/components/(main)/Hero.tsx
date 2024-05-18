"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import SliderImage1 from "../../../public/Slider-Image1.png";
import SeachIcon from "../../../public/search-line.png";
import shippingIcon from "../../../public/shipping.png";
import RetrunIcon from "../../../public/return.png";
import DeliveryIcon from "../../../public/delivery.png";
import RefundIcon from "../../../public/refund.png";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  options?: EmblaOptionsType;
};

const Hero = (props: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <main>
      <section className="max-w-[1380px] m-auto">
        <div className="h-screen w-full flex-between flex-col">
          <div className="hidden md:flex-[1] w-full md:flex-start flex-col">
            <Carousel>
              <CarouselContent className="h-full w-full">
                <CarouselItem>
                  <Image
                    src={SliderImage1}
                    alt=""
                    className="w-full object-cover"
                  />
                </CarouselItem>
                <div className="h-full w-full absolute px-10 md:px-20 flex flex-col items-items justify-center gap-2 md:gap-5">
                  <span className="text-lg font-normal text-black/75">
                    Starting from: $49.99
                  </span>
                  <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                    Exclusive collection <br />
                    for everyone
                  </h1>
                  <span className="py-3 w-44 rounded-3xl flex-center bg-black text-white font-normal text-sm md:text-md gap-2">
                    Explore Now
                    <Image
                      src={SeachIcon}
                      alt=""
                      height={15}
                      width={15}
                      className="object-cover"
                    />
                  </span>
                </div>
              </CarouselContent>
            </Carousel>
          </div>
          <div
            className="flex-[1] w-full flex-center md:hidden"
            id="HeroSlider"
          >
            <div className="h-full w-full absolute px-10 md:px-20 flex flex-col items-items justify-center gap-5 md:gap-5">
              <span className="text-xl font-normal text-black/75">
                Starting from: $49.99
              </span>
              <h1 className="text-3xl font-bold">
                Exclusive collection <br />
                for everyone
              </h1>
              <span className="py-3 w-44 rounded-3xl flex-center bg-black text-white font-normal text-sm md:text-md gap-2">
                Explore Now
                <Image
                  src={SeachIcon}
                  alt=""
                  height={15}
                  width={15}
                  className="object-cover"
                />
              </span>
            </div>
          </div>
          <div className="flex-[0.5] w-full hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
            <div className="h-[80px] w-[330px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
              <div className="flex-[1] flex-start">
                <Image
                  src={shippingIcon}
                  alt=""
                  height={30}
                  width={30}
                  className="object-cover"
                />
              </div>
              <div className="flex-[6] flex flex-col items-start justify-center">
                <h1 className="text-lg font-bold">Free Shipping</h1>
                <p>On order over $50.00</p>
              </div>
            </div>
            <div className="h-[80px] w-[330px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
              <div className="flex-[1] flex-start">
                <Image
                  src={RetrunIcon}
                  alt=""
                  height={30}
                  width={30}
                  className="object-cover"
                />
              </div>
              <div className="flex-[6] flex flex-col items-start justify-center">
                <h1 className="font-bold">Very easy to return</h1>
                <p>Just phone number</p>
              </div>
            </div>
            <div className="h-[80px] w-[330px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
              <div className="flex-[1] flex-start">
                <Image
                  src={DeliveryIcon}
                  alt=""
                  height={30}
                  width={30}
                  className="object-cover"
                />
              </div>
              <div className="flex-[6] flex flex-col items-start justify-center">
                <h1 className="font-bold">Worldwide delivery</h1>
                <p>Fast delivery worldwide</p>
              </div>
            </div>
            <div className="h-[80px] w-[330px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
              <div className="flex-[1] flex-start">
                <Image
                  src={RefundIcon}
                  alt=""
                  height={30}
                  width={30}
                  className="object-cover"
                />
              </div>
              <div className="flex-[6] flex flex-col items-start justify-center">
                <h1 className="font-bold">Refunds policy</h1>
                <p>60 days return for any reason</p>
              </div>
            </div>
          </div>
          <div className="flex-[0.3] w-full md:hidden">
            <h1 className="text-lg font-bold px-3 py-2">
              Nexton® always with you
            </h1>
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem className="h-full w-full flex-center">
                  <div className="h-[80px] w-[400px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
                    <div className="flex-[1] flex-start">
                      <Image
                        src={shippingIcon}
                        alt=""
                        height={30}
                        width={30}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-[6] flex flex-col items-start justify-center">
                      <h1 className="text-lg font-bold">Free Shipping</h1>
                      <p>On order over $50.00</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center">
                  <div className="h-[80px] w-[400px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
                    <div className="flex-[1] flex-start">
                      <Image
                        src={RetrunIcon}
                        alt=""
                        height={30}
                        width={30}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-[6] flex flex-col items-start justify-center">
                      <h1 className="font-bold">Very easy to return</h1>
                      <p>Just phone number</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center">
                  <div className="h-[80px] w-[400px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
                    <div className="flex-[1] flex-start">
                      <Image
                        src={DeliveryIcon}
                        alt=""
                        height={30}
                        width={30}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-[6] flex flex-col items-start justify-center">
                      <h1 className="font-bold">Worldwide delivery</h1>
                      <p>Fast delivery worldwide</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex-center">
                  <div className="h-[80px] w-[400px] flex-between border-[1px] border-black/20 rounded-3xl px-5">
                    <div className="flex-[1] flex-start">
                      <Image
                        src={RefundIcon}
                        alt=""
                        height={30}
                        width={30}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-[6] flex flex-col items-start justify-center">
                      <h1 className="font-bold">Refunds policy</h1>
                      <p>60 days return for any reason</p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex-[0.5] w-full md:flex-[0.9] hidden md:flex-between flex-col">
            <div className="flex-[0.5] w-full flex items-center justify-start px-3">
              <h1 className="text-2xl font-bold">
                Start exploring.
                <span className="text-[#4B5563]">
                  Good things are waiting for you
                </span>
              </h1>
            </div>
            <div className="flex-[1] flex-between gap-5">
              <div className="h-[100px] w-[350px] flex-between bg-black/5 rounded-xl">
                <div className="flex-[1] flex flex-col px-5 items-start justify-center">
                  <h1 className="text-xl font-bold">For Men's</h1>
                  <p className="text-sm font-medium text-[#4B5563]">
                    Starting at $24
                  </p>
                </div>
                <div className="flex-[1] flex-center gap-5">
                  <span className="h-[30px] w-[2px] bg-[#4b556362]"></span>
                  <h1 className="text-sm font-medium text-[#4B5563]">
                    SHOP NOW
                  </h1>
                </div>
              </div>
              <div className="h-[100px] w-[350px] flex-between bg-black/5 rounded-xl">
                <div className="flex-[1] flex flex-col px-5 items-start justify-center">
                  <h1 className="text-xl font-bold">For Women's</h1>
                  <p className="text-sm font-medium text-[#4B5563]">
                    Starting at $19
                  </p>
                </div>
                <div className="flex-[1] flex-center gap-5">
                  <span className="h-[30px] w-[2px] bg-[#4b556362]"></span>
                  <h1 className="text-sm font-medium text-[#4B5563]">
                    SHOP NOW
                  </h1>
                </div>
              </div>
              <div className="h-[100px] w-[350px] flex-between bg-black/5 rounded-xl">
                <div className="flex-[1] flex flex-col px-5 items-start justify-center">
                  <h1 className="text-xl font-bold">Accessories</h1>
                  <p className="text-sm font-medium text-[#4B5563]">
                    Explore accessories
                  </p>
                </div>
                <div className="flex-[1] flex-center gap-5">
                  <span className="h-[30px] w-[2px] bg-[#4b556362]"></span>
                  <h1 className="text-sm font-medium text-[#4B5563]">
                    SHOP NOW
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.5] w-full md:flex-[0.9] md:hidden flex-between flex-col">
            <div className="flex-[0.5] w-full flex items-center justify-start px-3">
              <h1 className="text-2xl font-bold">Start exploring.</h1>
            </div>
            <div className="flex-[1] w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem className="h-full w-full flex-center">
                    <div className="h-[100px] w-[350px] flex-between bg-black/5 rounded-xl">
                      <div className="flex-[1] flex flex-col px-5 items-start justify-center">
                        <h1 className="text-xl font-bold">For Men's</h1>
                        <p className="text-sm font-medium text-[#4B5563]">
                          Starting at $24
                        </p>
                      </div>
                      <div className="flex-[1] flex-center gap-5">
                        <span className="h-[30px] w-[2px] bg-[#4b556362]"></span>
                        <h1 className="text-sm font-medium text-[#4B5563]">
                          SHOP NOW
                        </h1>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex-center">
                    <div className="h-[100px] w-[350px] flex-between bg-black/5 rounded-xl">
                      <div className="flex-[1] flex flex-col px-5 items-start justify-center">
                        <h1 className="text-xl font-bold">For Women's</h1>
                        <p className="text-sm font-medium text-[#4B5563]">
                          Starting at $19
                        </p>
                      </div>
                      <div className="flex-[1] flex-center gap-5">
                        <span className="h-[30px] w-[2px] bg-[#4b556362]"></span>
                        <h1 className="text-sm font-medium text-[#4B5563]">
                          SHOP NOW
                        </h1>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex-center">
                    <div className="h-[100px] w-[350px] flex-between bg-black/5 rounded-xl">
                      <div className="flex-[1] flex flex-col px-5 items-start justify-center">
                        <h1 className="text-xl font-bold">Accessories</h1>
                        <p className="text-sm font-medium text-[#4B5563]">
                          Explore accessories
                        </p>
                      </div>
                      <div className="flex-[1] flex-center gap-5">
                        <span className="h-[30px] w-[2px] bg-[#4b556362]"></span>
                        <h1 className="text-sm font-medium text-[#4B5563]">
                          SHOP NOW
                        </h1>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-1 bg-[#4b556362]" />
                <CarouselNext className="absolute right-1 bg-[#4b556362]" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
