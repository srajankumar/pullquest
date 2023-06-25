import React from "react";
import Image from "next/image";
import waves from "../assets/svg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        src={waves}
        className="absolute object-cover h-screen opacity-100 bottom-0 -z-10"
        alt="img"
      />
      <h1 className="fixed flex flex-col text-white  text-xl md:pb-20 pb-36 font-extrabold justify-center items-center h-full w-full">
        {/* <img
          className=""
          src="https://readme-typing-svg.demolab.com?font=poppins&size=60&pause=1000&color=FFFFFF&center=true&vCenter=true&width=435&height=100&lines=Pull-Quest"
          alt="Typing SVG"
        /> */}
        <div className="drop-shadow-[0_0_0.3rem_#ffffff70] sm:text-7xl text-6xl font-sans">
          Pull Quest
        </div>
        <Link href="/instructions">
          <img
            src="https://readme-typing-svg.demolab.com?font=poppins&size=15&pause=1000&color=FFFFFF&center=true&vCenter=true&width=435&height=60&lines=Click+Here+to+begin+the+Quest+-%3E"
            alt="Typing SVG"
          />
        </Link>
      </h1>
    </div>
  );
}
