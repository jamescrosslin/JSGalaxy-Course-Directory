import React from "react";

const Featured = ({
  match: {
    params: { topic, fname, lname },
  },
}) => {
  return (
    <div className="main-content">
      <h2>Featured: {`${fname} ${lname}`}</h2>
      <p>
        Introducing <strong>{fname}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
