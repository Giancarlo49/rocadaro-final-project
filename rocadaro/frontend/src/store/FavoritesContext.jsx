import { createContext, useState, useEffect, useContext } from "react";


const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    //Variblen
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
      console.log({favorites})
    },[favorites])

    const addToFavorites = (item) => {
     
        setFavorites((favorites)=>{
          return [...favorites, item]
        });
        console.log("Product added to favorites", favorites);
    };
    
      const removeFromFavorites = (item) => {
        const updatedFavorites = favorites.filter((favoriteItem) => favoriteItem!== id);
        setFavorites(updatedFavorites);
      };

      const addCart = (id) => {
        // console.log("add card called", id);
    
        const data = products.find((product) => {
          return product.id === id;
        });
    
        // data.cartEntryId = generateId();
        const newCartState = [
          ...cart,
          { ...data, cartEntryId: generateId(), selectedSize: "S" },
        ];addCart
    
        setCart(newCartState);
      };
    
      // Löschen den Artikel aus dem Cart mit der neuen ID, die wir in (generateId) erstellt haben =>
      const removeItemCart = (entryId) => {
        const updatedCart = cart.filter((entry) => {
          return entry.cartEntryId !== entryId;
        });
    
        setCart(updatedCart);
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