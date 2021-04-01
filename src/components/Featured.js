import React from "react";

const Featured = ({
  match: {
    params: { topic, name },
  },
}) => {
  return (
    <div className="main-content">
      <h2>Featured: {name}</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
