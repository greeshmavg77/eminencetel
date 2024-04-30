import { footerLinks } from "@/constant";
import { footer_sections1 } from "@/constant";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="e_footer w-full bg-neutral-950  border-t  p-4 mt-10  gap-6 sm:px-16 lg:px-44 py-10">
      <div className="flex flex-row border-b border-slate-600 ">
        <div className="">
          <Link href="/" className="flex  items-center gap-3">
            <Image
              src="/eminencetel.png"
              alt="logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </Link>
          <p className="text p-4 max-w-[18rem]">
            Eminencetel provide services to private business and government
            organisations throughout UK, and specialize in the rollout of
            Telecommunications, Deployment & Intergeneration, Operation &
            Maintenance, Testing & Optimization, RAN Support and much more.
          </p>
        </div>
        <div className="footer_sections1 p-4">
          {footer_sections1.map((item) => (
            <div key={item.title} className="footer_sections1">
              <h3 className="font-bold text-[20.25px] ">{item.title}</h3>
              <div className="flex flex-col mt-4 leading-loose">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.title}
                    className="links  hover:text-slate-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer_sections p-4 ">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer_sections">
              <h3 className="font-bold text-[20.25px]">{item.title}</h3>
              <div className="flex flex-col mt-4 leading-loose ">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="links  hover:text-slate-300"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="f_contact p-4 ">
          <h3 className="font-bold text-[20.25px] ">CONNECT WITH US</h3>
          <ul className="flex flex-col mt-4 leading-loose">
            <li className="flex  gap-3 hover:text-slate-300">
              <Link className="links" href={""}>
                <Image
                  src="/icons/office.svg"
                  alt="office"
                  width={20}
                  height={20}
                />
              </Link>
              <strong>EMINENCETEL LTD</strong>
            </li>
            <li className="flex  gap-3 hover:text-slate-300">
              Unit 7, Regents Court, Farmoor Lane,Redditch, Worcestershire, B98
              0SD
            </li>
            <li className="flex gap-3  hover:text-slate-300">
              <Link className="links " href={""}>
                <Image
                  src="/icons/phone.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
              </Link>
              <strong>+44 1527 336 673</strong>
            </li>
            <li className="flex  gap-3  hover:text-slate-300">
              <Link className="links " href={""}>
                <Image
                  src="/icons/email.svg"
                  alt="email"
                  width={20}
                  height={30}
                />
              </Link>
              <strong>Email:</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="c_footer flex flex-row justify-between items-center flex-wrap lg:mt-5  sm:px-16 lg:px-44 py-">
        <div className="copyright lg:w-[25%] md:w-[75%] sm:w-full font-normal text-[13px]">
          <p>Eminencetel. All rights resereved</p>
        </div>
        <div className="footer__link flex flex-row gap-2 ">
          <Link className="links" href={""}>
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={14}
              height={14}
            />
          </Link>
          <Link className="links" href={""}>
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={14}
              height={14}
            />
          </Link>
          <Link className="links" href={""}>
            <Image
              src="/icons/twitter.svg"
              alt="twitter"
              width={14}
              height={14}
            />
          </Link>
          <Link className="links" href={""}>
            <Image
              src="/icons/youtube.svg"
              alt="youtube"
              width={14}
              height={14}
            />
          </Link>
          <Link className="links" href={""}>
            <Image src="/icons/insta.svg" alt="insta" width={14} height={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
