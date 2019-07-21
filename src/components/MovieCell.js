import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './common';

class MovieCell extends Component {
  render() {
    
    const {
      id,
      vote_average,
      title,
      release_date,
      poster_path
    } = this.props.movie;

    const {
      headerContentStyle,
      headerTextStyle,
      videoRatingStyle,
      videoRatingsContainerStyle,
      posterStyle
    } = styles;

    const posterUrl = 'https://image.tmdb.org/t/p/w1000_and_h563_face/' + poster_path;

    return (
      <Card>
        <CardSection style={headerContentStyle}>
          <View style={videoRatingsContainerStyle}>
              <Text style={videoRatingStyle}>
                {vote_average}
              </Text>
          </View>
          <View>
              <Text style={headerTextStyle}>
                {title}
              </Text>
              <Text>
                {release_date}
              </Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={posterStyle} source={{ uri: posterUrl }} />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 20,
    marginRight: 50,
    fontWeight: 'bold',
  },
  videoRatingStyle: {
    fontSize: 18,
    color: 'white'
  },
  videoRatingsContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    width: 50,
    marginRight: 10
  },
  posterStyle: {
    height: 350,
    width: null,
    flex: 1,
    resizeMode: 'cover'
  }
};

export default MovieCell;
