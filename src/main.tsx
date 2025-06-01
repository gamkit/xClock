import React from "react";
import { ThemeProvider } from "@/app/providers/ThemeProvider/ThemeProvider";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { withRedux } from "@/app/providers/with-redux";
import App from "@/app/App";
import "@/shared/ui/styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {withRedux(() => (
        <ThemeProvider>
          <App />
        </ThemeProvider>
      ))()}
    </BrowserRouter>
  </React.StrictMode>
);
