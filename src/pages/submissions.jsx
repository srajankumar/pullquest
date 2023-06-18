import React from "react";
import data from "../../data.json";

const submissions = () => {
  return (
    <div>
      {Object.values(data).map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>Age: {item.age}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default submissions;
