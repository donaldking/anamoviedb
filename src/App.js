import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import {
  PopularMovies,
  TopRatedMovies
} from './views';

const TabNavigator = createBottomTabNavigator({
  'Popular Movies': PopularMovies,
  'Top Rated': TopRatedMovies
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  }
});
export default createAppContainer(TabNavigator);
