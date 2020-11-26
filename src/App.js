import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
      </Router>
    );
  }
}

export default App;
