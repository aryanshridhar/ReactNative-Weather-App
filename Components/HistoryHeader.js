import React , {Component} from "react"
import { Appbar} from 'react-native-paper';
import {StyleSheet} from "react-native"



class HistoryHeader extends Component {

  render() {
    return (
      <Appbar.Header style = {styles.header}>
        <Appbar.BackAction
          onPress={this.props.cancelbutton}
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

