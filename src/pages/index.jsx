import React from "react";
import Image from "next/image";
import waves from "../assets/svg.png";
import Link from "next/link";
import TextRunner from "@/components/TextRunner";

export default function Home() {
  return (
    <div>
      <Image
        src={waves}
        className="absolute object-cover h-screen opacity-100 bottom-0 -z-20"
        alt="img"
      />
      <h1 className="fixed font-sans flex flex-col text-white text-xl -z-10 md:pb-20 pb-36 font-extrabold justify-center items-center h-full w-full">
        <div className="sm:text-7xl text-6xl font-sans">Pull Quest</div>
        <Link href="/instructions">
          <TextRunner />
        </Link>
      </h1>
    </div>
  );
}
