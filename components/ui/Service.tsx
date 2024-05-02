"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import { title } from "process";

export function Service() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {Content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h1 className="bg-black text-white text-xl rounded-full  w-fit px-4 py-1 mb-4">
              {item.badge}
            </h1>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const Content = [
  {
    title: "SERVICE WE PROVIDE",
    image: "/brand/demo.avif",
    description: (
      <>
        <p>
          Eminencetel has skilled and experienced technical field installation,
          commissioning and integration staff together with the project
          management competence to drive all projects from small trial to large,
          complex network rollouts. We are supported by a skilled team of RAN
          experts who are based off-shore.
        </p>
      </>
    ),
  },
  {
    badge:  "OUR PORTFOLIO",
    description: (
        <>
        <ul>
          <li>BTS Installation and Commissioning </li>
          <li>De-installation and de-commissioning</li>
          <li>RAN support</li>
          <li>Telecommunication network management</li>
          <li>Cisco router installation and commissioning</li>
          <li>Alcatel / ADVA installations</li>
          <li>2G, 3G, 4G, TDM-IP, ATM-IP migration</li>
          <li>EWL-IPVPN /3rd party transmission migration</li>
          <li>OSS/BSS solutions</li>
          <li>GSM/CDMA specialized services</li>
          <li>24/7 support on an end-to-end turnkey ownership model</li>
        </ul>
        </>
    ),
  },
  {
   
    description: (
        <>
        <p>
          All of our deployment activities follow best in class procedures and
          processes. Our installation teams have experience on various telecom
          equipment from leading vendors such as Nokia, Ericsson, Siemens, NEC,
          Huawei, and Alcatel. Our engineers hold all relevant training for the
          activities to which they are assigned. The team undertake all tasks
          under strict adherence to Health and Safety standards and are governed
          by regular audits ensure that consistent quality standards are
          maintained.
        </p>
      </>
    ),
  },
];
