import React , {Component} from "react"
import { Appbar} from 'react-native-paper';
import {StyleSheet} from "react-native"


class Header extends Component {

  render() {
    return (
      <Appbar.Header style = {styles.header}>
          <Appbar.Action icon="magnify" onPress={this._handleSearch} /> 
      </Appbar.Header>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
    header : {
        backgroundColor : "#00E1FD", 
        paddingLeft : 20 , 
        paddingTop : 10 , 
        paddingBottom : 10
    }
})