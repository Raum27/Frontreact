import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/UPLOADIMAGE",
    element:<UPLOADIMAGE></UPLOADIMAGE>,
  },
  {
    path: "/ProcessImage",
    element:<ProcessImage></ProcessImage>,
  },
  {
    path: "/DOWLOADIMAGE",
    element:<DOWLOADIMAGE></DOWLOADIMAGE>,
  },
  {
    path: "/UPLOADVIDEO",
    element:<UPLOADVIDEO></UPLOADVIDEO>,
  },
  {
    path: "/DOWLOADVIDEO",
    element:<DOWLOADVIDEO></DOWLOADVIDEO>,
  },
  {
    path: "/ProcessVideo",
    element:<ProcessVideo></ProcessVideo>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App/>
  </React.StrictMode>,
)
