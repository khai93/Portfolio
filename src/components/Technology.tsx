import React from 'react';
import useTechnologies from "../hooks/useTechnologies.js";

export default ({name}) => {
  const [getLogo] = useTechnologies();
  
  return (
    <img className="technology" alt={"Logo of " + name} src={getLogo(name)}></img>
  )
}