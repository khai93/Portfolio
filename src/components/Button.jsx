import React from "react";

import '../styles/buttons.css';

export default ({ content, style = "primary", onClick}) => {
  const buttonClassName = React.useMemo(() => {
    switch(style.toLowerCase()) {
      case "primary":
      case "secondary":
          return "button-"+style;
      default:
          throw new Error("Button Style '" + style + "' does not exist");
    }
  }, [style]);
  
  return (
    <button className={"button " + buttonClassName} onClick={onClick}>
      {content}
    </button>
  )
}