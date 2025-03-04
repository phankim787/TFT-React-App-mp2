//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import {root} from "../.eslintrc.cjs";
// import Units from "./pages/Units.jsx";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App />,
//     },
//     {
//         path: '/Units',
//         element: <Units />,
//     }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
