import React from "react";
import dataWindowPopup from "../styles/DataWindowPopup.module.css";
import { useState } from "react/cjs/react.production.min";
const DataWindowPopup = (props) => {
  //const [visible, setVisibility] = useState(true);

  return (
    <div className={dataWindowPopup.window}>
      <div className={dataWindowPopup.overlay}></div>
      <div className={dataWindowPopup.content}>
        <div className={dataWindowPopup.closebtn} onClick={props.onCloseWindow}>
          x
        </div>
        <p>{props.bubbleTitle}</p>
        {props.setBubbleData()}
      </div>
    </div>
  );
};

export default DataWindowPopup;
