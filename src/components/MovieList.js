import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Spinner } from './../components/common';
import MovieCell from './MovieCell';

class MovieList extends Component {
  renderMovies() {
    return this.props.movies.map(movie =>
      <MovieCell key={movie.id} movie={movie} />);
  }

renderSpinner() {
  if (this.props.movies.length === 0) {
    return <Spinner size='small' />
  }
}
  render() {
    return (
      <ScrollView>
        {this.renderMovies()}
        {this.renderSpinner()}
      </ScrollView>
    );
  }
}
export default MovieList;
