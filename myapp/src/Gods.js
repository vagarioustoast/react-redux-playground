import React from "react";

const Gods = ({ gods }) => {
  const myGods = gods.map(god => {
    if (god.age > 0)
      return (
        <div className="gods" key={god.id}>
          <div>Name: {god.name}</div>
          <div>Age: {god.age}</div>
          <div>Belt: {god.b}</div>
        </div>
      );
    else {
      return null;
    }
  });
  return <div className="god-list">{myGods}</div>;
};

export default Gods;
