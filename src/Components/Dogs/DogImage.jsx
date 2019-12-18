import React from "react";

const DogImage = props => {
  return <img className="dogImage" src={props.imageUrl} alt="Dog" />;
};

export default DogImage;
