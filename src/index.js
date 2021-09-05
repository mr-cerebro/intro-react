
import React from 'react';
import ReactDOM from 'react-dom';
/*
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*

JavaScript Nativo

const rootEl = document.getElementById('root')
const h1 = document.createElement('h1')
const div = document.createElement('div')
h1.textContent = 'Introdução ao React'
h1.className = 'title'
rootEl.appendChild(div)
div.appendChild(h1)
*/

const rootEl = document.getElementById('root')
/*

React 

const h1 = React.createElement('h1', {
  children: 'Introdução ao React',
  className: 'title'
})
*/

/*
JSX
*/
const h1 = <h1 className="title"><span>Introdução ao React</span></h1>

ReactDOM.render(h1, rootEl)