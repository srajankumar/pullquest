import React from "react";
import waves from "../assets/svg.png";
import Image from "next/image";

const Background = () => {
  return (
    <div>
      <Image
        src={waves}
        className="absolute object-cover h-screen opacity-100 bottom-0 -z-20 w-full"
        alt="img"
      />
    </div>
  );
};

export default Background;
