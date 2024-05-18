import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import Usericon from "../../../public/user-btn.png";
import CartIcon from "../../../public/cart-icon.png";
import MenuIcon from "../../../public/menu-line.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <section>
      <main className="max-w-[1380px] m-auto">
        <div className="h-20 w-full flex-between">
          <div className="flex-[1] flex-start px-3">
            <Image
              src={Logo}
              alt=""
              height={100}
              width={100}
              className="object-cover hidden md:flex"
            />
            <Image
              src={Logo}
              alt=""
              height={50}
              width={50}
              className="object-cover md:hidden flex"
            />
          </div>
          <div className="flex-[1] flex-center">
            <form action="/">
              <input
                type="text"
                placeholder="Search for any products"
                className="flex-[1] flex-start px-3 md:px-20 py-2 bg-black/10 rounded-3xl placeholder:text-black/50"
              />
            </form>
          </div>
          <div className="flex-[1] hidden lg:flex-center gap-5">
            <Link href="" className="flex-center gap-5">
              <Image
                src={Usericon}
                alt=""
                height={20}
                width={20}
                className="object-cover"
              />
            </Link>
            <Link href="">
              <Image
                src={CartIcon}
                alt=""
                height={20}
                width={20}
                className="object-cover"
              />
            </Link>
          </div>
          <div className="flex-[1] flex-end px-3 lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Image src={MenuIcon} alt="" height={30} width={30} />
              </SheetTrigger>
              <SheetContent>
                <div className="h-screen flex flex-col gap-5 items-start justify-center">
                  <Link
                    href=""
                    className="text-3xl text-left font-medium hover:text-blue-500 hover:animate-wiggle transition duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    href=""
                    className="text-3xl text-left font-medium hover:text-blue-500 hover:animate-wiggle transition duration-300"
                  >
                    Shop
                  </Link>
                  <Link
                    href=""
                    className="text-3xl text-left font-medium hover:text-blue-500 hover:animate-wiggle transition duration-300"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href=""
                    className="text-3xl text-left font-medium hover:text-blue-500 hover:animate-wiggle transition duration-300"
                  >
                    Sale
                  </Link>
                  <Link
                    href=""
                    className="text-3xl text-left font-medium hover:text-blue-500 hover:animate-wiggle transition duration-300"
                  >
                    About Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Header;
