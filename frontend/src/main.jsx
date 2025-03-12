import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";  // ✅ Import AuthProvider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>  {/* ✅ Wrap App with AuthProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);

