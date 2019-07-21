import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import {
  PopularMovies,
  TopRatedMovies } from './views';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <PopularMovies />
      </SafeAreaView>
    );
  }
}
export default App;
