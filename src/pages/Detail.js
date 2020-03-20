import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = 'c7629dea'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    state = { movies: {} }

    _fetchMovie(id){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`).then(res => res.json())
        .then(movie => {console.log({movie}); this.setState({movies:movie})});
    }
    componentDidMount () {
        const { movieId } = this.props.match.params;
        this._fetchMovie(movieId);
    }

    render() { 
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movies
        return ( 
        <div className="card-content">
            <ButtonBackToHome/>
            <h1>Titulo: {Title}</h1>
            <img src={Poster} alt="Poster Pelicula"/>
            <p>{Actors}</p>
            <p>Puntuación: {Metascore}%</p>
            <p>{Plot}</p>
        </div>
         );
    }
}
 
