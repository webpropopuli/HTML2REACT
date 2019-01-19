import React, { Component } from "react";

import Main from "./components/MainSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "Priority Premium" };
  }

  render() {
    return (
      <>
        <div className="page-container">
          <Header />

          <Main name={this.state.name} />

          <Footer />
        </div>
      </>
    );
  }
}

export default App;
