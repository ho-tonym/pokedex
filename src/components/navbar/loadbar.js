import React from 'react'

const LoadBar = ({ isFetching }) => (
  <>
    <div className={`load-bar ${isFetching ? "w-35" : "w-100"}`} />
  </>
)

export default LoadBar
