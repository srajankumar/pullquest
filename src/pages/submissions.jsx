import React from "react";
import data from "../components/data.json";
import Background from "../components/Background";
import Footer from "../components/Footer";

const truncateString = (str, numWords) => {
  const words = str.split(" ");
  if (words.length <= numWords) {
    return str;
  }
  return words.slice(0, numWords).join(" ") + " ...";
};

const Submissions = () => {
  return (
    <div>
      <Background />
      <div className="w-full flex flex-wrap text-justify justify-center md:p-10 p-5 mb-10">
        {Object.values(data).map((item) => (
          <a
            href={`https://github.com/${item.username}`}
            target="_blank"
            key={item.username}
          >
            <div className="sm:transform sm:hover:scale-105 hover:normal-case m-3 w-[23rem] h-[10rem] overflow-hidden transition-all duration-300 flex items-center backdrop-blur-lg shadow-2xl rounded-xl font-bold p-5">
              <div className="flex">
                <img
                  alt="dp"
                  className="px-2 w-24"
                  src={`https://avatars1.githubusercontent.com/${item.username}`}
                />
              </div>
              <div className="px-2 flex w-full flex-col justify-center items-center">
                <div className="drop-shadow-[0_0_0.3rem_#ffffff70]">
                  {item.name}
                </div>
                <div className="drop-shadow-[0_0_0.3rem_#ffffff70]">
                  &quot;{truncateString(item.quote, 6)}&quot;
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Submissions;
