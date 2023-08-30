import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavigation from "./components/latyout/MainNavigation";
import MainContentsPage from './components/latyout/MainContentsPage';


function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <MainContentsPage />
      </Router>
    </div>
  );
}

export default App;
