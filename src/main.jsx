import React from "react";
import ReactDOM from "react-dom";
import WujieReact from "wujie-react";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import "./i18n/config";
import "antd/dist/antd.css";

const { bus, setupApp, preloadApp, destroyApp } = WujieReact;
// 引用配置文件
ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
