import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// Create the root
const root = createRoot(document.getElementById("root"));

// Render the app
root.render(
  <Router>
    <App />
  </Router>,
);
