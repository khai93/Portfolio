import React from 'react';
import Technology from "./Technology.tsx";

export default ({name, description, image, sourceLink, previewLink, technologies}) => {
  return (
    <div className="project">
      <div className="project-image" style={{backgroundImage: `url("${image}")`, backgroundRepeat: "no-repeat no-repeat", backgroundPosition: "center",  backgroundSize: "cover"}}></div>
      <div className="project-content">
        <h2 className="project-title">{name}</h2>
        <p className="project-desc">{description}</p>
        <h2>Technologies</h2>
        {
          technologies && technologies.length > 0 && technologies.map(v => <Technology key={v} name={v} />)
        }
        <div className="project-buttons">
          <a href={sourceLink || ""} target="_blank" className="project-source-link">View Source</a>
          <a href={previewLink || ""} target="_blank" className="project-preview-link">Live Preview</a>
        </div>
      </div>
    </div>
  )
}