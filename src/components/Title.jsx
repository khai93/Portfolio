import React from 'react';
import Space from "./Space.jsx";

export default ({title}) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <div className="title-divider"></div>
      <Space height="30px"></Space>
    </div>
  )
}