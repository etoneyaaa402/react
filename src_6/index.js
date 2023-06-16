import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let state = {
  "flags": [
      {
          countryName: "Belarus",
          flag: "url('http://www.flags.net/images/smallflags/BLRU0001.GIF')",
          mask: "+375 (XX) XXX-XX-XX",
      },
      {
          countryName: "Russia",
          flag: "url('http://www.flags.net/images/smallflags/RUSS0001.GIF')",
          mask: "+7 (XXX) XXX-XX-XX",
      },
      {
          countryName: "Ukraine",
          flag: "url('http://www.flags.net/images/smallflags/UKRN0001.GIF')",
          mask: "+380 (XX) XXX-XX-XX",
      },
      {
          countryName: "Poland",
          flag: "url('http://www.flags.net/images/smallflags/POLA0001.GIF')",
          mask: "+48 XXX-XXX-XXX",
      },
      {
          countryName: "Latvia",
          flag: "url('http://www.flags.net/images/smallflags/LATV0001.GIF')",
          mask: "+371 XXXX-XXXX",
      },
      {
          countryName: "USA",
          flag: "url('http://www.flags.net/images/smallflags/UNST0001.GIF')",
          mask: "+1 (XXX) XXX-XX-XX",
      },
  ],
  days: 31,
  months: 12,
  minYear: 1900,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
