import React, { Component } from 'react';
import axios from 'axios';
import { SafeAreaView } from 'react-native';
import MovieList from './../components/MovieList';

class TopRatedMovies extends Component {
  state = { movies: [] };
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=b4c76740d5e6c03e52db0f08da329672&language=en-US&page=1')
    .then(response => this.setState({ movies: response.data.results }));
  }
  render() {
    return (
      <SafeAreaView>
        <MovieList movies={this.state.movies} />
      </SafeAreaView>
    );
  }
}
export { TopRatedMovies };
