import React from "react";
import  ReactDOM  from "react-dom";
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
let posts = [
    { id: 1, message: "Viva la revolucion!!", likesCount: "10" },
    { id: 2, message: "I am Che!!", likesCount: "40" },
    { id: 3, message: "Cuba revolucioner!!", likesCount: "42" },
    { id: 4, message: "i am vin!!", likesCount: "139" },
  ];
  let dialogData = [
    { id: 1, name: "Valerich" },
    { id: 2, name: "Petr" },
    { id: 3, name: "Elena" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Igor" },
    { id: 6, name: "Jack" },
  ];
  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Hi! How are you?" },
    { id: 3, message: "Yo!!" },
    { id: 4, message: "Good!" },
    { id: 5, message: "I am russian ocupant" },
    { id: 6, message: "Winter!!" },
  ];
ReactDOM.render(<BrowserRouter><App posts={posts} dialogData={dialogData} messages={messages}/></BrowserRouter>,document.getElementById('root'))