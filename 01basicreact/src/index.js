import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM
//implementation of React in web
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
    {/* <App/> - custom tag like HTMLtag eg: <br/> <img/> */}
  </React.StrictMode>
);
