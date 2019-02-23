import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// npx babel src/lib --out-dir public/scripts --ignore "src/**/*.test.js"
// browserify public/scripts/app.js - o public/bundle.js
// browserify public/scripts/app.js | uglifyjs > public/bundle.js

import Test from "./test/test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>I was just loaded dynamicly</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Test />
        </header>
      </div>
    );
  }
}

export default App;
