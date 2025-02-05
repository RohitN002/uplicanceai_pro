import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
const client =
  "152132584709-27mo202rqdr8jjn9hfppqr8ivn2bc5rh.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={client}>
      <CssBaseline />
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
