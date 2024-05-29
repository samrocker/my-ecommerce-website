'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
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

type Product = {
  id: number;
  title: string; // Assuming the title property is returned by the API
  category: string;
  rating: number;
  price: number;
  thumbnail: string; // Assuming the thumbnail property is returned by the API
  // discountedPrice: number; // Assuming discountedPrice is optional or not always returned by the API
};

const BestSeller: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="w-full flex-between flex-col py-5">
          <div className="flex-[0.5] w-full flex-start px-3 py-5">
            <h1 className="text-2xl font-bold flex gap-1">
              Best seller <span className="hidden md:flex">.</span>
              <span className="text-[#4B5563] hidden md:flex">
                Best selling of the month
              </span>
            </h1>
          </div>
          <div className="flex-[1] w-full py-10">
            <Carousel
              className="max-w-[1380px] m-auto w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="flex-center md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="h-[420px] w-[280px] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-2">
                      <div className="flex-[1] w-full flex-center bg-[#ddd]/30 rounded-xl">
                        <Image
                          src={product.thumbnail}
                          alt=""
                            width={280}
                              height={420}
                          className="w-full object-cover"
                        />
                      </div>
                      <div className="flex-[1] w-full flex-between">
                        <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                          <h1 className="text-sm font-bold">{product.title}</h1>
                          <p className="text-[#4B5563] text-sm font-medium">
                            {product.category}
                          </p>
                          <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                            <Image
                              src={RatingStar}
                              alt=""
                              height={17}
                              width={17}
                            />
                            {product.rating}
                          </h1>
                        </div>
                        <div className="flex-[1] flex-end flex-col text-right">
                          <h1 className="text-md font-bold">${product.price}</h1>
                          {/* <p className="text-[#4B5563] text-sm font-medium ">
                            ${product.discountedPrice}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
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

export default BestSeller;
