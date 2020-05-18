import React, { Component } from 'react'
import { connect } from 'react-redux'
import MoviesItems from './movieitem'
import {Link} from 'react-router-dom'
export class FavouriteMovie extends Component{
    render(){
        const {favourite}= this.props 
        return(<div>
            <Link to="/">Home</Link>

            <h1>My Favourite Movie</h1>
            {
               favourite.map(item=><MoviesItems key={item.id} movie={item} showButon={false}/>)
            }
        </div>
        
        )
    }
}

const mapStateToprops=state=>{
    console.log("my fave movie is-",state)
    return{
favourite:state.Favmovie
     }
}

export default connect(mapStateToprops,null)(FavouriteMovie)