import React , {Component} from "react";
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from './HomeScreen'


const HomeRoute = () => {
  return(
    <HomeScreen/>
  )
}
const HistoryRoute = () => <Text>Albums</Text>;

class Navigator extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'queue-music' , color : "#1B2433"},
      { key: 'history', title: 'History', icon: 'album' , color : "#00E1FD"},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    history: HistoryRoute,
  });

  render() {
    return (
      <BottomNavigation
        activeColor = {'white'}
        style = {{backgroundColor : '#1B2433'}}
        barStyle = {{backgroundColor : "#1B2433"}}
        navigationState={this.state}
        shifting = {true}
        barStyle = {{marginBottom  :10}}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default Navigator