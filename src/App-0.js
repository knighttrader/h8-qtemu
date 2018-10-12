// Call Home component inside ./pages/Home folder
// -----------------------------------------------
// Try to Run by rename App-0.js to App.js and ...
// rename index-0.js inside ./pages/Home
import React, { Component } from "react";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
