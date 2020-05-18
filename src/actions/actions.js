export const MOVIES="MOVIES";
export const ADD_FAV="ADD_FAV"

export const movies=items=>{
    const action={
type:MOVIES,
items
    }
    return action
}

export const favourite=movie=>{
    const action={
        type:ADD_FAV,
        movie
    }
    return action
}