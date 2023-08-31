import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import MainContentsPage from "./components/layout/MainContentsPage";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <div className="App">
      <FavoritesContextProvider>
        <Router>
          <MainNavigation />
          <MainContentsPage />
        </Router>
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
