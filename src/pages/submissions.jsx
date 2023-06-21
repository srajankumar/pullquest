import React from "react";
import data from "../../data.json";

const submissions = () => {
  return (
    <div className="container flex flex-wrap text-justify justify-center md:p-10 p-5 mb-10">
      {Object.values(data).map((item, index) => (
        <div className="bg-green-400 m-3 w-80" key={index}>
          <h2>{item.name}</h2>
          <p>Age: {item.age}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default submissions;
