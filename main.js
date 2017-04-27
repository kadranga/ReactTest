import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App now={new Date().toString()} b="7"/>, document.getElementById('app'));