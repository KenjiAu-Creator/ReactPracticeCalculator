import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Interface from './components/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Interface title="Calculator"/>
  </React.StrictMode>,
  document.getElementById('root')
);

