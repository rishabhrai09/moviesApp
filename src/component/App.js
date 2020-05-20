import React from 'react';
import './App.css';
import MoviesResult from './moviesResults';
import FavouriteMovie from './favouriteMovie';

import {
  
  Switch,
  Route
} from 'react-router-dom'

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
     <FavouriteMovie/>

     </div>
     <div className="row">
       
     <MoviesResult/>
     
   
   
   
     </div>
   
     
    </div>
  );
}

export default App;
