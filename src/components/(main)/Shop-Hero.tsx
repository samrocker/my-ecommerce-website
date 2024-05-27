'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductImage from "../../../public/product-image.png";
import RatingStar from "../../../public/Rating-Start-icon.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  oldPrice?: number;
  reviews?: number;
}

const ShopHero: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data.products || []);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section>
      <main className="max-w-[1536px] mx-auto p-4">
        <div className="w-full flex flex-col lg:flex-row">
          <aside className="flex-[0.8] hidden lg:flex flex-col gap-10 py-10">
            <div className="flex flex-col gap-3 sticky top-10">
              <h1 className="text-xl font-bold">Categories</h1>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-medium">
                  Men's fashion
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-medium">
                  Women's fashion
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-medium">
                  Kids fashion
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-5 sticky top-48 pr-16">
              <h1 className="text-xl font-bold">Price range</h1>
              <div className="w-full">
                <Slider
                  defaultValue={[0]}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="flex-between w-full gap-5">
                <div className="flex-[1] flex flex-col items-start justify-center">
                  <h1 className="text-sm font-medium text-[#4e5a6b] px-3 py-2">Min</h1>
                  <Input className="border-[#4e5a6b]/30" placeholder="Min"/>
                </div>
                <div className="flex-[1] flex flex-col items-start justify-center">
                  <h1 className="text-sm font-medium text-[#4e5a6b] px-2 py-2">Max</h1>
                  <Input className="border-[#4e5a6b]/30" placeholder="Max"/>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sticky top-96">
            <h1 className="text-xl font-bold">Sort order</h1>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-medium">
                Most Popular
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-medium">
                Best Rating
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-medium">
                Price Low - High
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox />
                <h1 className="text-[#4e5a6b] text-sm font-medium">
                Price High - Low
                </h1>
              </div>
            </div>
          </aside>
          <div className="flex-[3] flex justify-center lg:justify-start">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {products.map((product, index) => (
                <div key={index} className="h-[26.25rem] md:h-[24rem] w-[17.5rem] md:w-[16rem] flex-between flex-col border-[1px] border-[#4b55633f] rounded-3xl p-1 shadow-lg">
                  <div className="flex-[1] w-full flex-center">
                    <Image
                      src={product.thumbnail || ProductImage}
                      alt={product.title}
                      className="w-full object-cover"
                      width={256}
                      height={256}
                    />
                  </div>
                  <div className="flex-[1] w-full flex-between">
                    <div className="flex-[2] flex flex-col gap-2 px-3 text-left items-start justify-center">
                      <h1 className="text-sm font-bold">{product.title}</h1>
                      <p className="text-[#4B5563] text-sm font-medium">
                        {product.category}
                      </p>
                      <h1 className="text-[#4B5563] text-sm font-medium flex gap-1">
                        <Image src={RatingStar} alt="" height={17} width={17} />
                        {product.rating} 
                      </h1>
                    </div>
                    <div className="flex-[1] flex-end flex-col text-right">
                      <h1 className="text-md font-bold">${product.price}</h1>
                      {product.oldPrice && (
                        <p className="text-[#4B5563] text-sm font-medium line-through">
                          
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ShopHero;
