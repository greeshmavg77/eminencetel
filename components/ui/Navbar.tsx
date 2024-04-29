import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10  bg-black border-b-[1px] border-gray-500">
    <nav className=" max-w-[1440px]  mx-auto flex justify-between items-center sm:px-16 px-6 py-2">
      <Link href="/" className="flex justify-center items-center gap-3">
      <Image
              src="/eminencetel.png"
              alt="logo"
              width={170}
              height={100}
              className="object-contain"
            />
        {/* <p className="text-white font-bold text-[18px] tracking-[-1] leading-5">
          eminencetel
        </p> */}
      </Link>
      <div className="hidden h-full lg:flex gap-[70px] ">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="nav-link flex 
          text-white font-semibold  group/nav cursor-pointer flex- transition-all h-[50px] items-center hover:border-b-[3px] border-sky-500"
        >
          {link.label}
          {link.icon_s === "true" && (
            <span>
              <svg
                aria-hidden="true"
                width="6px"
                height="6px"
                fill="none"
                font-semibold
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </span>
          )}
        </Link>
      ))}
      </div>
      <Image
          src={"menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  </header>
  )
}
export default Navbar