import React from "react";

const Gods = ({ gods }) => {
  const myGods = gods.map(god => {
    return (
      <div className="gods" key={god.id}>
        <div>Name: {god.name}</div>
        <div>Age: {god.age}</div>
        <div>Belt: {god.b}</div>
      </div>
    );
  });
  return <div className="god-list">{myGods}</div>;
};

export default Gods;
