import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import App from "./App";
import mainbackground from "./assets/graphics/mainbackground.jpg";
import registerServiceWorker from "./registerServiceWorker";
import TrajanProRegular from "./assets/fonts/TrajanPro-Regular.otf";

injectGlobal`
  body {
    background: url(${mainbackground});
  }
`;

injectGlobal`
  @font-face {
     font-family: 'TrajanPro';
  src: url(${TrajanProRegular});
  }`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
