import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './../components/MovieList';
import { Header, ANASafeAreaView, ANAViewContainer } from './../components/common';

class PopularMovies extends Component {
  state = { movies: [] };
  componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b4c76740d5e6c03e52db0f08da329672&language=en-US&page=1')
    .then(response => this.setState({ movies: response.data.results }));
  }
  render() {
    return (
      <ANASafeAreaView>
        <ANAViewContainer>
          <Header headerText="POPULAR MOVIES" />
          <MovieList movies={this.state.movies} />
        </ANAViewContainer>
      </ANASafeAreaView>
    );
  }
}
export { PopularMovies };
