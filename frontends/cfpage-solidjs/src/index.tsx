import { render } from "solid-js/web";

import { Router, Route } from "@solidjs/router";

import App from "./routes/App";
import Yolo from "./routes/Yolo";
import Searx from "./routes/Searx";
import Some from "./routes/Some";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HTTPError from "./routes/HTTPError";

import { createSignal } from "solid-js";
const root = document.getElementById("root");
// const lol = document.createElement("div");
// document.body.appendChild(lol);
const [count, setCount] = createSignal(0);

if (root) {
  document.body.removeChild(root);
}

const Layout = (props: any) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};
render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={App} />
      <Route path="/yolo/:id" component={Yolo} />
      <Route path="/searx" component={Searx} />
      <Route path="/youtube" component={Some} />
      <Route path="*NotFound" component={HTTPError} />
    </Router>
  ),
  document.body
);
