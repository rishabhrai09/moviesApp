import {MOVIES} from '../actions/actions';

export const movies=(state=[],action)=>{
    switch(action.type){
    case MOVIES:
        console.log("movies are",action.items)
        return action.items
        default:
            return state;
    }
}