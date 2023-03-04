import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { App } from "./app";
import { feedbackReducer } from "./reducers/feedback";
import "./styles/index.css";

const store = createStore(feedbackReducer);

const root = createRoot(document.getElementById("root"));

function render() {
  root.render(
    <StrictMode>
      <App store={store} />
    </StrictMode>
  );
}

render();
store.subscribe(render);
