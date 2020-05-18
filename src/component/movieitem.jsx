import React, { Component } from 'react'
import './movieItems.css';
import { connect } from 'react-redux';
import {favourite,RemoveFavourite} from '../actions/actions'
import { bindActionCreators } from 'redux';
const urlcompo='https://image.tmdb.org/t/p/w600_and_h900_bestv2/'

class MoviesItems extends Component{
    state={
        favourite:false
    }
    capitalizeFirstLetter(string) {
        return string.slice(0,200);
    }

    addToFav(){
        this.setState({favourite:!this.state.favourite})
        this.props.favourite(this.props.movie)
    }
    removefav(){
        this.setState({favourite:!this.state.favourite})
        this.props.RemoveFavourite(this.props.movie)
    }
    displayfav(){
        if(!this.state.favourite){
return <svg className="bi bi-heart" onClick={()=>this.addToFav()} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" clipRule="evenodd"/>
</svg>

        }else{
             return <svg className="bi bi-heart-fill"  onClick={()=>this.removefav()} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" clipRule="evenodd"/>
           </svg>

        }
    }

    render(){
        const {movie}= this.props
        return(
        
                
            <div className="col-md-6 col-sm-6  mr " style={{width:'200px',height:'220px'}}  >
         <div className="card" style={{width: '25rem',height:'110px'}}>
  <img src={urlcompo+movie.poster_path} className="card-img-top img-fluid img-thumbnail image" alt="..."/>
  <div className="card-body">
    <p className="card-title">{movie.title}</p>
        <p className="card-text">{this.capitalizeFirstLetter(movie.overview)}.</p>
        <p className="card-text"> Release Date-{movie.release_date}</p>
        <p className="card-text">Ratings- <span className="badge badge-default"><svg style={{marginBottom:'2px'}} className="bi bi-star" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>{movie.popularity}</span></p>
        <span>{this.props.showButton? this.displayfav():null}</span>
  </div>
</div>

         </div>
          

        )
    }
}
const mapDisptachToprops=dispatch=>{
    return bindActionCreators({favourite,RemoveFavourite},dispatch)
}
export default connect(null,mapDisptachToprops)(MoviesItems)