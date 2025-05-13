import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },  
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
