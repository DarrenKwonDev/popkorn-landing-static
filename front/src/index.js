import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./Components/Layout";
import "antd/dist/antd.css";
import { IntlProvider } from "react-intl";
import en from "./locale/en";
import ko from "./locale/ko";

const defaultLang = localStorage.getItem("lang") || "en";

let message;

if (defaultLang === "ko") {
  message = ko;
} else {
  message = en;
}

ReactDOM.render(
  <IntlProvider locale={defaultLang} messages={message}>
    <Layout>
      <App />
    </Layout>
  </IntlProvider>,
  document.getElementById("root")
);
