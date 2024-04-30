import { color } from "framer-motion";
import Image from "next/image";
import React from "react";

const Whyus = () => {
  return (
    <div className="bg-white w-full h-auto relative py-10 items-center flex justify-center">
      <div className="bg-gray-200 rounded-full items-center w-[35rem] p-[6rem] justify-center">
        <p>
          We aim to set the standard in Telecom & IT solutions by offering
          expert services that go beyond immediate challenges, align with the
          needs of our customers, and drive business outcomes. As an UK-owned
          and operated company, we have grown on the strength of a local
          presence, top-down engagement, and an innovative, flexible approach.
        </p>
        <p>
          We never compromise on quality; this is one of our principles. Our
          clients and employees recognise and appreciate the value we bring with
          each engagement. This approach has made our business one of the best
          places to keep creativity flowing. Allow us continue to press for new
          ideas to expedite perfection for your business requirements.
        </p>  
      </div>
      <div className="items-center absolute bg-purple-500 rounded-full px-[2.75rem] py-10 flex justify-center mr-[40rem] shadow-neutral-800" >
        <p className="font-bold text-white text-[2rem] text-center px-[13px] leading-[50px]  ">Why <br />Choose <br />  Us</p>
      </div>
      <div className=" absolute rounded-full bg-purple-500 p-5 border-l-stone-600 border-transparent border-3 mb-[22rem] ml-[27rem]">
      <Image
        src="/icons/office.svg"
        alt="office"
        width={20}
        height={20}
      />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Whyus;
