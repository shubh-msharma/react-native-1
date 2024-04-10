import {createContext, useState} from 'react'

export const FavoritesContext = createContext({
    ids:[],
    addFavorites:(id)=>{console.log("calling dummay")},
    removeFavorites:(id)=>{console.log("calling dummay")}
})

function FavoritesContextProvider({children}){

    const [favoritesIds,setFavoritesIds] = useState([])

    function addFavorites(id){
        console.log("adding in state")
        setFavoritesIds(pre=>{
            const temp = [...pre,id];
            console.log(temp)
            return temp;
        })
        console.log(favoritesIds)
    }

    function removeFavorites(id){
        console.log("removing from state")
        setFavoritesIds(pre=>pre.filter(item=> item != id))
    }

    const state = {
        ids : favoritesIds,
        addFavorites:addFavorites,
        removeFavorites:removeFavorites
    }

    return (
        <FavoritesContext.Provider value={state}>
            {children}
        </FavoritesContext.Provider> 
    )
}

export default FavoritesContextProvider;