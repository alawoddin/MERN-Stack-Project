import React from "react";

import './App.css';
import Goal from "./components/Goal";

const App = () =>  {
    // return React.createElement("h1" , {} , "hi i am developer");

    const goals = [
      {id: "d1" , text : "hello world"},
      {id: "d2" , text : "hello developer"},
      {id: "d3" , text : "hello mern"},
    ];
    return <div>
      <h2>what we do</h2>
     <Goal goal={goals}/>
    </div>
};

export default App;
