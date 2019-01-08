import React from 'react'

const TypeImage = ({type, colorImg}) => {
  const buttonStyle = {
    borderColor: colorImg.color
  };
  return(
    <React.Fragment>

    <div className="typeButton" style={buttonStyle}>
      <img src={colorImg.img} alt={type + " type img"}/>
      <p>{type}</p>
    </div>
    </React.Fragment>
  )
}
export default TypeImage
