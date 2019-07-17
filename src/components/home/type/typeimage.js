import React from 'react';

const TypeImage = ({ type, color, img }) => {
  const buttonStyle = {
    borderColor: color,
  };
  return(
    <React.Fragment>

      <div className="typeButton" style={buttonStyle}>
        <img src={img} alt={`${type} type`} />
        <p>{type}</p>
      </div>
    </React.Fragment>
  );
};

export default TypeImage;
