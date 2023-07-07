import { createContext, useState, useEffect, useContext } from "react";


const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    //Variblen
    const [favorites, setFavorites] = useState([]);
    const addToFavorites = (id) => {
     
        setFavorites((favorites)=>{
          return [...favorites, id]
        });
        console.log("Product added to favorites", favorites);
      };
    
      const removeFromFavorites = (id) => {
        const updatedFavorites = favorites.filter((favoriteItem) => favoriteItem!== id);
        setFavorites(updatedFavorites);
      };

    //values in object
      const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
      };

    return (
        <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
    );
}

const Store = () => useContext(FavoriteContext);
export default Store;