import React from "react";
import { useState } from "react";
import bubbleStyle from "../styles/bubbles.module.css";
import DataWindowPopup from "./DataWindowPopup";
const Bubble = (props) => {
  const randomDuration = Math.floor(Math.random() * 40 + 20);
  const [popup, setPopup] = useState(false);
  const setBubbleData = () => {
    return (
      <div>
        {props.data.map((d) => (
          <ul key={d}>{d}</ul>
        ))}
        <img src={props.img1}></img>
      </div>
    );
  };
  const setWindow = () => {
    if (popup === false && props.bubbleOpen !== true) {
      props.changeBubbleStatus(true);
      setPopup(true);
    } else {
      setPopup(false);
    }
  };
  const onCloseWindow = () => {
    setPopup(false);
    props.changeBubbleStatus(false);
  };
  return (
    <div>
      <div
        className={bubbleStyle.bubble}
        style={{
          animationDuration: randomDuration.toString() + "s",
        }}
        onClick={setWindow}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "normal",
            /*padding: "3rem",*/
            paddingTop: "2.2rem",
            fontSize: "1.25rem",
            alignContent: "center",
          }}
        >
          {props.title}
        </h2>
      </div>
      <div>
        {popup ? (
          <DataWindowPopup
            setWindow={setWindow}
            setBubbleData={setBubbleData}
            bubbleTitle={props.title}
            onCloseWindow={onCloseWindow}
          ></DataWindowPopup>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default Bubble;
