import { createContext, useState, ReactNode } from "react";

interface FavoriteMeetup {
    id: string;
    title:string;
    image:string;
    address: string;
    description:string;
}

interface FavoritesContextItems {
    favorites:FavoriteMeetup[];
    totalFavorites: number;
    addFavoriteHandler: (FavoriteMeetup: FavoriteMeetup) => void;
    removeFavoriteHandler: (meetupId: string) => void;
    itemIsFavoriteHandler: (meetupId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextItems>({
    favorites: [],
    totalFavorites: 0,
    addFavoriteHandler: (favoriteMeetup)=> {},
    removeFavoriteHandler: (meetupId)=> {},
    itemIsFavoriteHandler: (meetupId)=> false,
});

export function FavoritesContextProvider(props: {children: ReactNode}) {
    const [userFavorites, setUserFavorites] = useState<FavoriteMeetup[]>([]);

    function addFavoriteHandler(favoriteMeetup: FavoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId: string){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId: string){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    
    const contextValue:FavoritesContextItems = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavoriteHandler: addFavoriteHandler,
        removeFavoriteHandler: removeFavoriteHandler,
        itemIsFavoriteHandler: itemIsFavoriteHandler
    }
    return (
        <FavoritesContext.Provider value={contextValue}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext