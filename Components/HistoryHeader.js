import React , {Component} from "react"
import { Appbar} from 'react-native-paper';
import {StyleSheet} from "react-native"


class HistoryHeader extends Component {

  _goBack = () =>
  {
    console.log('Fff');
  }

  render() {
    return (
      <Appbar.Header style = {styles.header}>
        <Appbar.BackAction
          onPress={this._goBack}
        />
      </Appbar.Header>
    );
  }
}

export default HistoryHeader;

const styles = StyleSheet.create({
    header : {
        backgroundColor : "#1B2433", 
    }
})

