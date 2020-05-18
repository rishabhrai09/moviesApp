import React, { Component } from 'react';
import SearchInput from './searchBox';
import {connect} from 'react-redux'
import MoviesItems from './movieitem'
import {Link} from "react-router-dom"

class MoviesResult extends Component{
    render(){
        const {movies} =this.props;
        return(
            <div>
<Link to="/fav">Favourite List</Link>
                <hr/>
            <SearchInput/>
            <div>
            {
             movies.map(item=><MoviesItems showButton={true} key={item.id} movie={item} />)
            }
            </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    console.log("state is:-",state)
    return{
        movies:state.movies

    }
}
export default connect(mapStateToProps,null)(MoviesResult)