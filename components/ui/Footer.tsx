import { footerLinks } from "@/constant";
import { footer_sections1 } from "@/constant";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="e_footer border-t flex flex-row p-4 mt-10 justify-center gap-6 sm:px-16 lg:px-44 py-10 ">
        <div className="">
          <Link href="/" className="flex justify-center items-center gap-3">
            <Image
              src="/eminencetel.png"
              alt="logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </Link>
          <p className="p-4 max-w-[18rem] ">
            Eminencetel provide services to private business and government
            organisations throughout UK, and specialize in the rollout of
            Telecommunications, Deployment & Intergeneration, Operation &
            Maintenance, Testing & Optimization, RAN Support and much more.
          </p>
        </div>
        <div className="footer_sections1 p-4 max-w-[18rem]">
          {footer_sections1.map((item) => (
            <div key={item.title} className="footer_sections1">
              <h3 className="font-bold text-[20.25px] ">{item.title}</h3>
              <div className="flex flex-col mt-4 leading-loose">
                {item.links.map((link) => (
                  <Link key={link.title} href={link.title} className="links">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer_sections p-4 max-w-[18rem]">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer_sections">
              <h3 className="font-bold text-[20.25px]">{item.title}</h3>
              <div className="flex flex-col mt-4 leading-loose">
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} className="links ">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="f_contact p-4 max-w-[18rem]">
          <h3 className="font-bold text-[20.25px] ">CONNECT WITH US</h3>
          <ul className="flex flex-col mt-4 leading-loose">
            <li>
              <strong>Office: EMINENCETEL LTD</strong>
            </li>
            <li>
              Unit 7, Regents Court, Farmoor Lane,Redditch, Worcestershire, B98
              0SD
            </li>
            <li>
              <strong>Tel : +44 1527 336 673</strong>
            </li>
            <li>
              <strong>Email:</strong>
            </li>
          </ul>
        </div>
      </footer>
      <div className="contents flex-row justify-around">
      <div className="b_footer flex flex-row justify-between items-center flex-wrap lg:mt-10  border-t sm:px-16 lg:px-44 py-">
        <p className="lg:w-[25%] md:w-[75%] sm:w-full font-normal text-[13px] leading-4">
          Eminencetel. All rights resereved
        </p>

        <div className="flex max-md:flex-col flex-wrap  gap-3 sm:px-16 lg:px-40 py-10">
        <div className="flex flex-row gap-2 footer__link ">
            <Link className="links" href={""}>
              <Image
                src="/icons/linkedin.svg"
                alt="linkedin"
                width={22}
                height={22}
              />
            </Link>
            <Link className="links" href={""}>
              <Image
                src="/icons/insta.svg"
                alt="instagram"
                width={22}
                height={22}
              />
            </Link>
            <Link className="links" href={""}>
              <Image
                src="/icons/twiter.svg"
                alt="twiter"
                width={22}
                height={22}
              />
            </Link>
            <Link className="links" href={""}>
              <Image
                src="/icons/youtub.svg"
                alt="youtub"
                width={22}
                height={22}
              />
            </Link>
            <Link className="links" href={""}>
              <Image
                src="/icons/fb.svg"
                alt="facebook"
                width={22}
                height={22}
              />
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
