import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
