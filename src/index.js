import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App/index.js';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<App />)


////////////////////////////////

//React 17
// ReactDOM.render(
//   // <React.StrictMode>
//     <App />,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );
////////////////////////////////

