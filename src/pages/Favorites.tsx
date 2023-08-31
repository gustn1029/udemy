import React from 'react';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';
import { Title } from '../ui/styles';

const FavoritesPage:React.FC = () => {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        <MeetupList items={favoritesCtx.favorites} />
    }

    return (
        <section>
            <Title>My Favorites</Title>
            {content}
        </section>
    )
}

export default FavoritesPage;