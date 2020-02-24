import React from 'react'
import jsonTypes from '../../../../../../assets/json/types.json'
import TypeImage from '../../../../../general/typeimage'
import typeImagesImport from '../../../../../../assets/images/typeImages'
import uuid from 'uuid'

const WeaknessList = ({ typeArray, id, title }) => {
  return (
    <>
      {typeArray.length > 0 && (
        <div className="types" id={id}>
          <h3>{title}</h3>
          {typeArray.map(e => (
            <TypeImage
              key={uuid.v4()}
              type={e}
              color={jsonTypes[e].color}
              img={typeImagesImport[e]}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default WeaknessList
