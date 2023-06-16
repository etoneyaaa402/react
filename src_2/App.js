import './App.css';
import React from 'react';
import Clock from './components/Clock';
import JobMenu from './components/JobMenu';

function App() {
  return (
    <div className="App">
      <Clock timezone="+3:00" format="24"/>
      <JobMenu/>
    </div>
  );
}

export default App;
