"use client";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./Tracing-beam";
import { ListGroupItem, ListGroup, Pagination } from "reactstrap";
import { AuroraBackground } from "./aurorabg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

export function Service() {
  return (
    <AuroraBackground>
      <TracingBeam className="px-6">
        <div className="  text-white mx-auto antialiased pt-4 relative ">
          <div className="mb-10 ">
            <h1 className="bg-black text-white text-xl  border-2 border-slate-500 rounded-full w-fit   px-4 py-1 m-4">
              SERVICE WE PROVIDE
            </h1>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mb-6 "
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <img
                  src="/service_img/s1.jpg"
                  className="network-image"
                  alt="Placeholder Image 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/service_img/s2.jpg"
                  className="network-image"
                  alt="Placeholder Image 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/service_img/s3.webp"
                  className="network-image"
                  alt="Placeholder Image 3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/service_img/s4.jpg"
                  className="network-image"
                  alt="Placeholder Image 4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/service_img/s5.jpg"
                  className="network-image"
                  alt="Placeholder Image 5"
                />
              </SwiperSlide>
            </div>
          </Swiper>
          <p className="mb-6">
            Eminencetel has skilled and experienced technical field
            installation, commissioning and integration staff together with the
            project management competence to drive all projects from small trial
            to large, complex network rollouts. We are supported by a skilled
            team of RAN experts who are based off-shore.
          </p>
          <h1 className="bg-black text-white text-xl  border-2 border-slate-500 rounded-full  w-fit   px-4 py-1 m-4">
            OUR PORTFOLIO
          </h1>
          <div className="mb-6">
            <ListGroup className="list-disc">
              <ListGroupItem>BTS Installation and Commissioning </ListGroupItem>
              <ListGroupItem>
                De-installation and de-commissioning
              </ListGroupItem>
              <ListGroupItem>RAN support</ListGroupItem>
              <ListGroupItem>
                Telecommunication network management
              </ListGroupItem>
              <ListGroupItem>
                Cisco router installation and commissioning{" "}
              </ListGroupItem>
              <ListGroupItem>Alcatel / ADVA installations</ListGroupItem>
              <ListGroupItem>
                2G, 3G, 4G, TDM-IP, ATM-IP migration
              </ListGroupItem>
              <ListGroupItem>
                EWL-IPVPN /3rd party transmission migration
              </ListGroupItem>
              <ListGroupItem>OSS/BSS solutions</ListGroupItem>
              <ListGroupItem>GSM/CDMA specialized services</ListGroupItem>
              <ListGroupItem>
                24/7 support on an end-to-end turnkey ownership model
              </ListGroupItem>
            </ListGroup>
          </div>
          <div>
            <p className="mb-6">
              All of our deployment activities follow best in class procedures
              and processes. Our installation teams have experience on various
              telecom equipment from leading vendors such as Nokia, Ericsson,
              Siemens, NEC, Huawei, and Alcatel. Our engineers hold all relevant
              training for the activities to which they are assigned. The team
              undertake all tasks under strict adherence to Health and Safety
              standards and are governed by regular audits ensure that
              consistent quality standards are maintained.
              <br />
              Eminencetel operates as an extension of the client’s own team, on
              or off site, providing operational management and technical
              support during the project to ensure procedures are established,
              performance is measured and objectives are met. We provide fully
              outsourced, end-to-end solutions, sharing risk and delivering
              value to our customers.
            </p>
          </div>
        </div>
      </TracingBeam>
    </AuroraBackground>
  );
}