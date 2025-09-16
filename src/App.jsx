import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarComponent from "./components/NavBarComponent";
import Home from "./pages/Home";
import VideoGenerator from "./pages/VideoGenerator";
import Avatars from "./pages/Avatars";
import Voices from "./pages/Voices";
import TextGenerator from "./pages/TextGenerator";
import { SelectionProvider } from "./context/SelectionContext";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
    <div className="d-flex vh-100">
      <NavBarComponent />
      <div className="flex-grow-1 p-4 bg-light overflow-auto" style={{ marginLeft: "250px" }}>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SelectionProvider>
        <App />
      </SelectionProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/avatars", element: <Avatars /> },
      { path: "/voices", element: <Voices /> },
      { path: "/create", element: <VideoGenerator /> },
      { path: "/text-generator", element: <TextGenerator /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
