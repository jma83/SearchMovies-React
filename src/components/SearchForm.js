import React,{Component} from 'react';
//http://www.omdbapi.com/
const API_KEY = 'c7629dea'

export class SearchForm extends Component {
    state = { 
        inputMovie: ''
     }

     _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
     }

     
     _handleSubmit = (e) => {
        e.preventDefault();
        
        const{ inputMovie } = this.state;
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`).then(res => res.json())
        .then(results => {const {Search = [], totalResults = "0"} = results
            console.log({Search,totalResults})
            this.props.onResults(Search)} );
     }
     componentDidUpdate(prevProps, prevState, snapshot){
         console.log("componentDidUpdate: " + prevState.inputMovie.value);
     }
    render() { 
        
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" id="textInput"
                        onChange={this._handleChange}
                        type="text" placeholder="Find a film"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>  
         );
    }
}
