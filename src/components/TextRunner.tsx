"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const TextRunner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Click here to Begin the Quest"],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 50,
  });
  return (
    <h1 className="py-5 text-sm md:text-lg">
      <span>{text}</span>
      <Cursor
        cursorStyle="->"
        cursorColor="rgb(216 180 254 / var(--tw-bg-opacity))"
        cursorBlinking={true}
      />
    </h1>
  );
};

export default TextRunner;
