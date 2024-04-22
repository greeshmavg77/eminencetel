import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10  bg-gray-800">
    <nav className=" max-w-[1440px] h-[80px] mx-auto flex justify-between items-center sm:px-16 px-6 py-5">
      <Link href="/" className="flex justify-center items-center gap-3">
        <image></image>
        <p className="text-white font-bold text-[18px] tracking-[-1] leading-5">
          eminencetel
        </p>
      </Link>
      <div className="flex gap-[70px] ">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="nav-link flex 
          text-white font-bold  group/nav cursor-pointer flex- transition-all h-[50px] items-center hover:border-b-[3px] border-sky-500"
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
    </nav>
  </header>
  )
}

export default Navbar