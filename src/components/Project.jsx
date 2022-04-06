import React from 'react';

export default ({name, description}) => {
  return (
    <div className="project">
      <div className="project-image"></div>
      <div>
        <h2 className="project-name">{name}</h2>
        <p className="project-desc">{description}</p>
        
      </div>
    </div>
  )
}