import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
// стили
import 'bootstrap/dist/css/bootstrap.min.css'
import 'emoji-mart/css/emoji-mart.css'
// компонент
import { App } from './App'
// небольшая корректировка "бутстраповских" стилей
const GlobalStyles = createGlobalStyle`
.card-header {
  padding: 0.25em 0.5em;
}
.card-body {
  padding: 0.25em 0.5em;
}
.card-text {
  margin: 0;
}
`

const root = document.getElementById('root')
render(
  <>
    <GlobalStyles />
    <App />
  </>,
  root
)




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
