"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/Tracing-beam";
import { ListGroupItem, ListGroup } from "reactstrap";
import { title } from "process";

export function Service() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-50 mx-auto antialiased pt-4 relative ">
        {Content.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h1 className="bg-black text-white text-xl  border-2 border-slate-500  rounded-full  w-fit px-4 py-1 mb-4">
              {item.title}
            </h1>

            {/* <h2 className={twMerge("text-xl mb-4")}>{item.title}</h2> */}

            <div className="text-sm  prose prose-sm dark:prose-invert ">
             
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
        </p><br/>
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
  {
    title: "OUR PORTFOLIO",
    description: (
      <>
        <ListGroup>
          <ListGroupItem>BTS Installation and Commissioning </ListGroupItem>
          <ListGroupItem>De-installation and de-commissioning</ListGroupItem>
          <ListGroupItem>RAN support</ListGroupItem>
          <ListGroupItem>Telecommunication network management</ListGroupItem>
          <ListGroupItem>Cisco router installation and commissioning </ListGroupItem>
          <ListGroupItem>Alcatel / ADVA installations</ListGroupItem>
          <ListGroupItem>2G, 3G, 4G, TDM-IP, ATM-IP migration</ListGroupItem>
          <ListGroupItem>EWL-IPVPN /3rd party transmission migration</ListGroupItem>
          <ListGroupItem>OSS/BSS solutions</ListGroupItem>
          <ListGroupItem>GSM/CDMA specialized services</ListGroupItem>
          <ListGroupItem>24/7 support on an end-to-end turnkey ownership model
          </ListGroupItem>
        </ListGroup>
      </>
    ),
  }
];
