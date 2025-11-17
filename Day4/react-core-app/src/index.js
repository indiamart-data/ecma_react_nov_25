// import './index.css';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <HelloComponent />
//   </React.StrictMode>
// );

// // ======================================== Using Bootstrap CSS
// // npm i bootstrap bootstrap-icons
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import 'bootstrap';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import HelloComponent from './components/1_hello/HelloComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <HelloComponent />
//   </React.StrictMode>
// );

// // ======================================== Multi Component
// // npm i bootstrap bootstrap-icons
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import 'bootstrap';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ComponentOne from './components/2_multi-components/ComponentOne';
// import ComponentTwo from './components/2_multi-components/ComponentTwo';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ComponentOne />
//     <ComponentTwo />
//   </React.StrictMode>
// );

// // ======================================== Multi Component
// // npm i bootstrap bootstrap-icons
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';

// import 'bootstrap';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ComponentOne from './components/2_multi-components/ComponentOne';
// import ComponentTwo from './components/2_multi-components/ComponentTwo';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ComponentOne />
//   </React.StrictMode>
// );

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(
//   <React.StrictMode>
//     <ComponentTwo />
//   </React.StrictMode>
// );

// ======================================== Using a single Root Component
// npm i bootstrap bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);