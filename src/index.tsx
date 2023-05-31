import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
// import { postsApi } from "./store/postsApiSlice";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    {/* <ApiProvider api={postsApi}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </ApiProvider> */}
  </Provider>
);
