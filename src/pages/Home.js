import React, { Component } from 'react';
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'



export class Home extends Component {
    state = { results: [], usedSearch: false }

    _handleResults = (results,usedSearch) =>{
        if (results === undefined)
        results = []
    
        usedSearch = true;
        this.setState({results,usedSearch})
    }
    
    _renderResults = () =>{
        const { results } = this.state;
        if (this.state.results.length === 0 && this.state.usedSearch === true) { 
            return (<p>Sin Resultados</p>)
        }else{ 
            return (<MoviesList  movies={results}/>)
        }
        
    }

    render() { 
        return ( 
        <div className="App">
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults}/>
            </div>
            {this._renderResults() }
        </div> 
      );
    }
}
 
