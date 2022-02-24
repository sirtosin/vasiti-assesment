import React from 'react'
import { Testimony } from '../../components'
import "./TestimonyOne.css"
import data from './data'
const TestimonyOne = () => {
  return (
    <div className="testimonyone__container">
      {data.map((item, index) => (
        <Testimony title={item.title}
          location={item.location}
          customer={item.customer}
          text={item.text}
          key={index}
          image={item.image}
          color={item.color}
          background={item.background}
        />)
      )}
    </div>
  );
}

export default TestimonyOne
