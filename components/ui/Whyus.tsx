import { color } from "framer-motion";
import Image from "next/image";
import React from "react";

const Whyus = () => {
  return (
    <div className="bg-white w-full h-auto relative flex justify-center items-center p-10">
     <div className=" relative p-10 mr-[19rem]">
        <div className="bg-gray-200 rounded-full items-center w-[35rem] p-[6rem] justify-center ml-[9rem] relative">
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
            <div className="items-center absolute bg-purple-500 rounded-full px-[2.75rem] py-10 flex justify-center bottom-[11rem] right-[30rem]">
            <p className="font-bold text-white text-[2rem] text-center px-[13px] leading-[50px]  ">
              Why <br />
              Choose <br /> Us
            </p>
            </div>
        </div>
          
        <div className="pl-5">
          <div className="absolute left-[40rem] bottom-[30rem]">
            <div className="relative flex gap-6 ">
              <div className="absolute rounded-full bg-purple-500 p-5 left-[-1rem]">
                <Image src="/instagram.svg" alt="office" width={20} height={20} />
              </div>
              <div className="flex items-center gap-8 bottom-6 relative pl-[4rem]">
                <div className="">
                  <hr className="w-20 h-0 border-t-2 border-gray-300" />
                </div>
                <div className="">
                  <h1 className="text-[25px] font-bold">placeholder</h1>
                  <p className="text-[15px] font-sans font-thin">
                    {" "}
                    We aim to set the <br /> standard in Telecom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[44.5rem] bottom-[22rem]">
            <div className="relative flex gap-6 ">
              <div className="absolute rounded-full bg-green-400 p-5 left-[-1rem]">
                <Image src="/instagram.svg" alt="office" width={20} height={20} />
              </div>
              <div className="flex items-center gap-8 bottom-6 relative pl-[4rem]">
                <div className="">
                  <hr className="w-20 h-0 border-t-2 border-gray-300" />
                </div>
                <div className="">
                  <h1 className="text-[25px] font-bold">placeholder</h1>
                  <p className="text-[15px] font-sans font-thin">
                    {" "}
                    We aim to set the <br /> standard in Telecom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[44.5rem] bottom-[12rem]">
            <div className="relative flex gap-6 ">
              <div className="absolute rounded-full bg-blue-500 p-5 left-[-1rem]">
                <Image src="/instagram.svg" alt="office" width={20} height={20} />
              </div>
              <div className="flex items-center gap-8 bottom-6 relative pl-[4rem]">
                <div className="">
                  <hr className="w-20 h-0 border-t-2 border-gray-300" />
                </div>
                <div className="">
                  <h1 className="text-[25px] font-bold">placeholder</h1>
                  <p className="text-[15px] font-sans font-thin">
                    {" "}
                    We aim to set the <br /> standard in Telecom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[40rem] bottom-[4rem]">
            <div className="relative flex gap-6 ">
              <div className="absolute rounded-full bg-gray-400 p-5 left-[-1rem]">
                <Image src="/instagram.svg" alt="office" width={20} height={20} />
              </div>
              <div className="flex items-center gap-8 bottom-6 relative pl-[4rem]">
                <div className="">
                  <hr className="w-20 h-0 border-t-2 border-gray-300" />
                </div>
                <div className="">
                  <h1 className="text-[25px] font-bold">placeholder</h1>
                  <p className="text-[15px] font-sans font-thin">
                    {" "}
                    We aim to set the <br /> standard in Telecom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  );
};

export default Whyus;
