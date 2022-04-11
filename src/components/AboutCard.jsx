import React from 'react';

export default ({iconUrl, name, description}) => {
  return (
    <div className="aboutCard">
      <img src={iconUrl} alt={"Icon of" + name} className="aboutCard-icon"></img>
      <h2 className="aboutCard-title">{name}</h2>
      <p className="aboutCard-desc">{description}</p>
    </div>
  )
}