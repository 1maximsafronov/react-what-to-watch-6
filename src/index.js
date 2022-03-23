import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.querySelector(`#root`)
);
