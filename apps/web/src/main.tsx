import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { MantineProvider, createTheme } from "@mantine/core";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { Notifications } from "@mantine/notifications";

const route = createBrowserRouter(routes);

const brandColors = new Array(10).fill("#39d5ac");
const theme = createTheme({
   /** Put your mantine theme override here */
   fontFamily: "Poppins, sans-serif",
   colors: {
      brand: brandColors,
   },
   primaryColor: "brand",
   breakpoints: {
      xs: "30em",
      sm: "35em", // 560px
      md: "45em", // 720px
      lg: "74em",
      xl: "90em",
   },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <MantineProvider theme={theme}>
         <Notifications />
         <RouterProvider router={route} />
      </MantineProvider>
   </React.StrictMode>
);
