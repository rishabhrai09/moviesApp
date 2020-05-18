import React, { Component } from 'react';
import SearchInput from './searchBox';
import {connect} from 'react-redux'
import MoviesItems from './movieitem'
class MoviesResult extends Component{
    render(){
        const {movies} =this.props;
        return(
            <div>
                <h1>here is the result</h1>
            <SearchInput/>
            <div>
            {
             movies.map(item=><MoviesItems key={item.id} movie={item} />)
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