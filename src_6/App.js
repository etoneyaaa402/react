import React from "react"
import logo from './logo.svg';
import './App.css';
import StudentInfo from "./components/StudentInfo/StudentInfo";
import Notes from "./components/Notes/CreateNote";


function App(props) {
  return (

    <div className="App">
      <Welcome />
      <StudentInfo state={props.state} />
      <Notes state={props.state}/>
    </div>

  );
}

const Welcome = () => {
  return (
    <div className="App-header">
      <h1>Качалюк Сергей</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Лабораторная работа 6</h1>
    </div>
  );
}

export default App;
