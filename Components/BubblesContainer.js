import React, { useState } from "react";
import Bubble from "./Bubble";
//import img1 from "../Resources/Images/webapp.png";
import Image from "next/image";
const BubblesContainer = () => {
  const [bubbleOpen, setBubbleOpenStatus] = useState(false);
  const changeBubbleStatus = (value) => {
    setBubbleOpenStatus(value);
  };
  const Aboutme = [
    "Name: Mina Hany.",
    "Date of Birth: 24/06/1998",
    "Nationality: Egyptian",
    "Address: Madalinskiego 108, 02-506 Warsaw Poland",
    "Email: hanymina43@gmail.com.",
    "Phone number: +48 792 503 711.",
  ];
  const Qualifications = [
    "Developed programs using C/C++/C#.",
    "Developed webapps using Javascript, Typescript, Html and CSS.",
    "Created web apps using frame works like React JS for frontend.",
    "Worked with next JS for backend development.",
    "Can fully use and code on Linux systems.",
    "Created multithreaded programs in C.",
    "Familiar with styling using libraries such as MUI components.",
    "Used R studio for statistical analysis",
    "Likes to work in teams.",
    "Familiar with creating REST APIs",
    "Fluent in  SQL.",
  ];
  const Projects = [
    "Was responsible for creating the frontend for a webapp that was mainly used by admin for viewing bookings that were made by users and for managing users, all user data was retrieved using backend, webapp was made using React JS.",
    "Developed small 2D games in Unity",
    "Developed small projects using SQL, Jdeveloper",
    "Developed some programs using Winforms, WinAPI and WPF",
  ];
  const Education = [
    "Doing my bachelors, currently a third year student at Warsaw University Of Technology in the faculty of Mathematics and Information Science",
  ];
  const Languages = [
    "First language Arabic.",
    "Speaks English fluently.",
    "Speaks little Polish and French.",
  ];

  return (
    <div>
      <Bubble
        title="Languages"
        data={Languages}
        bubbleOpen={bubbleOpen}
        changeBubbleStatus={changeBubbleStatus}
      ></Bubble>
      <Bubble
        title="About me"
        data={Aboutme}
        bubbleOpen={bubbleOpen}
        changeBubbleStatus={changeBubbleStatus}
      ></Bubble>
      <Bubble
        title="Education"
        data={Education}
        bubbleOpen={bubbleOpen}
        changeBubbleStatus={changeBubbleStatus}
      ></Bubble>
      <Bubble
        title="Skills"
        data={Qualifications}
        bubbleOpen={bubbleOpen}
        changeBubbleStatus={changeBubbleStatus}
      ></Bubble>
      <Bubble
        title="Projects"
        data={Projects}
        bubbleOpen={bubbleOpen}
        changeBubbleStatus={changeBubbleStatus}
      ></Bubble>
    </div>
  );
};
export default BubblesContainer;
