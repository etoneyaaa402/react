import React from 'react';
import logo from './logo.svg';
import './App.css'
import Catalog from './components/SortTable/Catalog/Catalog';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App(props) {
  return (
    <div className="App">
      <Welcome />
      <SignUpForm state={props.state} flags={props.state.flags} days={props.state.flags} months={props.state.months} minYear={props.state.minYear}/>
      <Catalog products={props.state.products}/>
    </div>
  );
}

const Welcome = () => {
  return (
    <div className="App-header">
      <h1>Качалюк Сергей</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Лабораторная работа 10</h1>
    </div>
  );
}

export default App;
