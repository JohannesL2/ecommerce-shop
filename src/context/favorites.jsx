import React, {createContext, useEffect, useState} from 'react'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({children}) => {
    const [favoriteItems, setFavoriteItems] = useState(() => {
      const storedFavs = localStorage.getItem('favoriteItems');
      return storedFavs ? JSON.parse(storedFavs) : [];
    })
  
    const addToFavorites = (item) => {
      if (!favoriteItems.find(fav => fav.id === item.id)) {
        setFavoriteItems([...favoriteItems, item]);
      }
    }
  
    const removeFromFavorites = (item) => {
      setFavoriteItems(favoriteItems.filter(fav => fav.id !== item.id));
    }
  
    useEffect(() => {
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
    }, [favoriteItems]);

    return(
      <FavoriteContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites
      }}
      >
        {children}
      </FavoriteContext.Provider>
    )
}