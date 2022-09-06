import React, { useContext } from "react";
import "./App.scss";
import { configContext } from "./Providers/configurationContext";

function App() {
  const { backgroundColor, buttonColor } = useContext(configContext);

  document.documentElement.style.setProperty("--backgroundColor", backgroundColor);
  document.documentElement.style.setProperty("--buttonColor", buttonColor);

  return (
    <div className="widget">
      <nav className="widget-nav">
        <p className="nav-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <a
          href="https://direct-web.qa.slicelife.com/?domain_name=qa-shop51.com"
          className="order-button"
          id="order-link">
          Order Now
        </a>
      </nav>
    </div>
  );
}

export default App;
