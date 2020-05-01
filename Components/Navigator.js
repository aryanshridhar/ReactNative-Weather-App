import React , {Component} from "react";
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from './HomeScreen'


const MusicRoute = () => {
  return(
    <HomeScreen/>
  )
}
const AlbumsRoute = () => <Text>Albums</Text>;

class Navigator extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
  });

  render() {
    return (
      <BottomNavigation
        activeColor = {'white'}
        barStyle = {{backgroundColor : "#1B2433"}}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

export default Navigator