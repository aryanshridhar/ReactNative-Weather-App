import React , {Component} from "react";
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from './HomeScreen'
import { StyleSheet } from "react-native";


const HomeRoute = () => {
  return(
    <HomeScreen/>
  )
}
class Navigator extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'album' , color : "#1B2433"},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
  });

  render() {
    return (
      <BottomNavigation
        activeColor = {'white'}
        style = {{backgroundColor : '#1B2433'}}
        navigationState={this.state}
        barStyle = {customstyles.navigatorstyle}
        renderScene={this._renderScene}
      />
    );
  }
}

export default Navigator

const customstyles = StyleSheet.create({
  navigatorstyle : {
    marginBottom  :10,
    backgroundColor : "#1B2433"
  }
})