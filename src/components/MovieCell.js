import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from './common';

class MovieCell extends Component {
  render() {
    const {
      id,
      vote_average,
      title,
      release_date,
      poster_path } = this.props.movie;
    return (
      <View>
        <Text>
          {title}
        </Text>
      </View>
    );
  }
}
export default MovieCell;
