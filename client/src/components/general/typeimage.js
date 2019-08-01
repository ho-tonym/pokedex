import React from 'react'

const TypeImage = ({ classname, type, color, img }) => {
  const buttonStyle = {
    borderColor: color,
  }
  return(
    <>
      <div className={`typeButton ${classname}`} style={buttonStyle}>
        <img src={img} alt={`${type} type`} />
        <p>{type}</p>
      </div>
    </>
  )
}

TypeImage.defaultProps = {
  classname: "",
};

export default TypeImage
