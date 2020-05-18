import {ADD_FAV} from '../actions/actions';

export const Favmovie=(state=[],action)=>{
    switch (action.type) {
        case ADD_FAV:
            console.log("fav movie is=",action.movie)
            return state
    
        default:
            return state
    }
}