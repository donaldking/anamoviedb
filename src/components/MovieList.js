import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import MovieCell from './MovieCell';

class MovieList extends Component {
  renderMovies() {
    return this.props.movies.map(movie =>
      <MovieCell key={movie.id} movie={movie} />);
  }
  render() {
    return (
      <ScrollView>
        {this.renderMovies()}
        <View>
          <Text>
            LOAD MORE
          </Text>
        </View>
      </ScrollView>
    );
  }
}
export default MovieList;
