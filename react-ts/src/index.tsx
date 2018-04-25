import * as React from "react";
import * as ReactDOM from "react-dom";
import InRange from './components/InRange';

ReactDOM.render(
  <InRange low={1} high={10} />,
  document.getElementById("app")
);
