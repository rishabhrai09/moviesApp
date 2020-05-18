import {combineReducers} from 'redux';
import {movies} from './reducers/movieReducer';
import {Favmovie} from './reducers/favmovieReducer';


export const rootReducer=combineReducers({movies,Favmovie})