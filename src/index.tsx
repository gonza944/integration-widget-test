import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

setTimeout(() => {
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
      <App />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*  <script defer="defer" src="/static/js/main.7c9d7070.js"></script>
    <link href="/static/css/main.38bd71de.css" rel="stylesheet"> */
