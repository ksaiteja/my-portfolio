import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto dark:text-white xl:h-screen">
      <div className="flex flex-col flex-1 mt-20">
        <div className="text-center md:text-left space-y-5 text-3xl md:text-5xl p-5 md:p-20">
          <p>
            Hello, I am <span className="font-medium">Saiteja</span>,
          </p>
          <p>
            <span className="text-blue-500">Web</span> and{" "}
            <span className="text-red-400">App</span> developer
          </p>
        </div>
        <div className="text-center md:text-left p-5 md:pl-20">
          <p className="text-gray">
            I am passionate about creating innovative and user-friendly web and
            mobile applications. With a strong background in web development, I
            strive to deliver high-quality solutions that meet both functional
            and aesthetic requirements.
          </p>
        </div>
        <div className="mx-5 md:mx-20 mt-5 md:mt-20 space-y-4">
          <a href="https://docs.google.com/document/d/1f0TTTo6eLgq-mlAXjUGBK6_4cGg1MXTU/edit?usp=sharing&ouid=114842710395784417583&rtpof=true&sd=true">
            <button className="btn btn-primary w-full">
              Download/View Resume
            </button>
          </a>
          <div className="flex flex-row justify-center space-x-9">
            <a
              href="https://github.com/ksaiteja"
              className="mb-2 md:mb-0 hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/saiteja-kalva-3517511b4/"
              className="mb-2 md:mb-0 hover:underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="hidden  md:flex flex-col flex-1 justify-center items-center">
        <div className="bg-gradient-to-b from-white to-blue-200 p-3 rounded-full">
          <Image
            src="/profile-pic.png"
            alt="my_image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
