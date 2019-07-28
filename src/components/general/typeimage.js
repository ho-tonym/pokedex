import React from 'react'

const TypeImage = ({ type, color, img }) => {
  const buttonStyle = {
    borderColor: color,
  }
  return(
    <>
      <div className="typeButton" style={buttonStyle}>
        <img src={img} alt={`${type} type`} />
        <p>{type}</p>
      </div>
    </>
  )
}

export default TypeImage
