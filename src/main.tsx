import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Introduction, Skills, Socials, Support } from "@/pages";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "@/App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/introduction" />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/socials",
        element: <Socials />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TooltipProvider delayDuration={0}>
      <RouterProvider router={routes} />
    </TooltipProvider>
  </React.StrictMode>,
);
