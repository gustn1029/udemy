import React from 'react';
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "../../pages/AllMeetups";
import NewMeetupPage from "../../pages/NewMeetup";
import FavoritesPage from "../../pages/Favorites";

const MainContentsPage:React.FC = () => {
    return (
        <main className='my-12 mx-auto w-[90%] max-w-2xl'>
            <Routes>
                <Route path={'/'} Component={AllMeetupsPage}></Route>
                <Route path={'/new-meetup'} Component={NewMeetupPage}></Route>
                <Route path={'/favorite'} Component={FavoritesPage}></Route>
            </Routes>
        </main>
    );
};

export default MainContentsPage;