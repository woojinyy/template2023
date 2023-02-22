import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HackerApp from "./HackerApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/*    <App /> */}
    <HackerApp />
  </>
);
/* HackerNews데이터를 axios가져올 때 ReacStrictMode가 있으면 두 번 요청발생
빈태그로 변경하였다
여기서 빈태그는  Fragement를 의미함 */
