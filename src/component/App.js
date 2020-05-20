import React from 'react';
import './App.css';
import MoviesResult from './moviesResults';
import FavouriteMovie from './favouriteMovie';
import {
  
  Switch,
  Route
} from 'react-router-dom'
import { movies } from '../actions/actions';
function App() {
  return (
    <div className="container">
      <div className="row text-center ">
     <div className="jumbotron pad ">
       <h1>My Movies</h1>
       <p>
         All about movies love
       </p>
       </div>
     </div>
     <div className="row">
       
     
     <Switch>
       <Route exact path="/" component={MoviesResult} />
       <Route path="/fav" component={FavouriteMovie} />
     </Switch>
   
     </div>
     <MoviesResult/>
     
    </div>
  );
}

export default App;
