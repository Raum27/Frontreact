import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Home from './components/Home.jsx';

import UPLOADIMAGE from './components/UPLOADIMAGE.jsx';
import DOWLOADIMAGE from './components/DOWLOADIMAGE.jsx';
import ProcessImage from './components/ProcessImage.jsx';

import UPLOADVIDEO from './components/UploadVideo.jsx';
import DOWLOADVIDEO from './components/DOWLOADVIDEO.jsx';
import ProcessVideo from './components/ProcessVideo.jsx';

const ipaddress = 'http://25.44.183.18:5000'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/UPLOADIMAGE",
    element:<UPLOADIMAGE ip={ipaddress}></UPLOADIMAGE>,
  },
  {
    path: "/ProcessImage",
    element:<ProcessImage ip={ipaddress}></ProcessImage>,
  },
  {
    path: "/DOWLOADIMAGE",
    element:<DOWLOADIMAGE ip={ipaddress}></DOWLOADIMAGE>,
  },
  {
    path: "/UPLOADVIDEO",
    element:<UPLOADVIDEO ip={ipaddress}></UPLOADVIDEO>,
  },
  {
    path: "/DOWLOADVIDEO",
    element:<DOWLOADVIDEO ip={ipaddress}></DOWLOADVIDEO>,
  },
  {
    path: "/ProcessVideo",
    element:<ProcessVideo ip={ipaddress}></ProcessVideo>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App/> */}
  </React.StrictMode>,
)
