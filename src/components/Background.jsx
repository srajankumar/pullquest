import React from "react";
import waves from "../assets/svg.png";
import Image from "next/image";

const Background = () => {
  return (
    <div>
      <Image
        src={waves}
        className="fixed object-cover h-screen opacity-50 bottom-0 -z-10"
        alt="img"
      />
    </div>
  );
};

export default Background;
