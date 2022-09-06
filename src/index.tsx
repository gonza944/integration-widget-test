import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfigurationContext } from "./Providers/configurationContext";

const widgetContainer = document.createElement("div");
widgetContainer.setAttribute("id", "widget");
const firstDocumentChild = document.body.firstElementChild;

if (!document.getElementById("widget")) {
  firstDocumentChild
    ? document.body.insertBefore(widgetContainer, firstDocumentChild)
    : document.body.appendChild(widgetContainer);
}

const root = ReactDOM.createRoot(
  document.getElementById("widget") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigurationContext>
      <App />
    </ConfigurationContext>
  </React.StrictMode>
);
