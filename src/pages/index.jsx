import React from "react";
import Image from "next/image";
import waves from "../assets/svg.png";

export default function Home() {
  return (
    <div>
      <Image
        src={waves}
        className="absolute object-cover h-screen opacity-100 bottom-0 -z-10"
        alt="img"
      />
      <h1 className="">PullQuest</h1>
    </div>
  );
}
