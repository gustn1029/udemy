import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/latyout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <Routes>
          <Route path={'/'} Component={AllMeetupsPage}></Route>
          <Route path={'/new-meetup'} Component={NewMeetupPage}></Route>
          <Route path={'/favorite'} Component={FavoritesPage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
