import React from "react";
import { Testimony } from "../../components";
import "./TestimonyTwo.css";
import data from "./data";
const TestimonyTwo = () => {
  return (
    <div className="testimonytwo__container">
      {data.map((item, index) => (
        <Testimony
          title={item.title}
          customer={item.customer}
          text={item.text}
          key={index}
          image={item.image}
          color={item.color}
          background={item.background}
        />
      ))}
    </div>
  );
};

export default TestimonyTwo;
