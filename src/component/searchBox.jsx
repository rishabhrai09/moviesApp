import React, { Component } from 'react'
import {FormControl,Form,FormGroup,Button ,FormLabel} from 'react-bootstrap';
import { API_KEY } from '../secretkey';
import {connect} from 'react-redux'
import {movies} from '../actions/actions';
import {bindActionCreators} from 'redux'
class SearchInput extends Component{
    state={
        query:''
    }
    search(){
        let url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
        fetch(url,{
            method:"GET"
        }).then(respose=>respose.json())
        .then(resultObj=>this.props.movies(resultObj.results))
    }

    
    render(){
        return(
            <div className="row text-center" >
           <Form inline className="col-md-12 col-md-offset-3">
               <FormGroup>
                   <FormLabel>Search</FormLabel>
                   { ' ' } &nbsp;
                   <FormControl
                   type="text"
                   placeholder="Avengers"
                   onChange={(event)=>this.setState({query:event.target.value})}
                   />
               </FormGroup>
               { ' ' } &nbsp;
               <Button onClick={()=>{this.search()}} variant="success">Serach</Button>
           </Form>
           
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return bindActionCreators({movies},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchInput) 