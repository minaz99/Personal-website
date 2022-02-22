import Head from "next/head";
import Image from "next/image";
//import styles from "../styles/Home.module.css";
import mainPages from "../styles/mainPage.module.css";
//import bubbleStyle from "../styles/bubbles.module.css";
import React from "react";
import BubblesContainer from "../Components/BubblesContainer";
export default function Home() {
  return (
    /* <div className={mainPages.backG}>*/
    <BubblesContainer></BubblesContainer>
    /*</div>*/
  );
}
