import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Error from "./error.jsx";
import Root from "./routes/root.jsx";
const router=createBrowserRouter([
    {
        path : "/",
        element : <Login/>,
        errorElement : <Error/>

    },
    {
        path : "/home",
        element : <Root/>
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
