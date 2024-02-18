import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";

const route = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <RouterProvider router={route} />
   </React.StrictMode>
);
