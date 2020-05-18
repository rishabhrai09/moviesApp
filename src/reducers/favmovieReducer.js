import {ADD_FAV,REMV_FAV} from '../actions/actions';

export const Favmovie=(state=[],action)=>{
    switch (action.type) {
        case ADD_FAV:
            console.log("fav movie is=",action.movie)
            let favourite=[...state,action.movie]
            return favourite
    case REMV_FAV:
        let removeFav=state.filter(item=>item.id!==action.movie.id)
return removeFav
        default:
            return state
    }
}