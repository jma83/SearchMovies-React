import React,{Component} from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { results: [] }

  _handleResults = (results) =>{
    if (results === undefined)
    results = []
    this.setState({results})
  }

  _renderResults = () =>{
    const { results } = this.state;
    return <MoviesList  movies={results}/>
  }

  render() { 
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
        </div>
        {this.state.results.length === 0 ? <p>Sin Resultados</p> : this._renderResults() }
      </div>
    );
  }
}

export default App;