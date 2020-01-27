import React from 'react';



export default function List(props) {
  const {numbers} = props;
  const listItems = numbers.map((number,index) =>
  <li key={index}>{number}</li>
);

  return (
    <div className="List">
     <ul>{listItems}</ul>
    </div>
  );
} 


