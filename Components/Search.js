import React , {Component} from "react"
import {Modal , View , StyleSheet , Text} from "react-native"
import { TextInput , Button  } from 'react-native-paper';
import HistoryHeader from './HistoryHeader'

class Search extends Component{
    
    state = {
        Value : ''
    }

    handlevalue = (e) =>
    {
        this.setState({Value : e});
    }
    render()
    {
        return(
        <React.Fragment>
            <Modal visible = {this.props.visible} animationType ='slide'>
                <HistoryHeader cancelbutton = {this.props.cancelbutton}/>
                <View style = {styles.mainview}>
                    <TextInput
                    autoFocus
                    placeholder = 'Search for City here'
                    style = {styles.textinput}
                    mode = 'outlined'
                    onChangeText ={this.handlevalue}
                    value={this.state.Value}
                    theme={ this.props.error ? { colors: { primary: '#FE0000'}} : { colors: { primary: '#1B2433'}}}
                    />
                    <View style ={styles.btnview}>
                        <Button theme={{ colors: { primary: '#1B2433'}}} mode="outlined" style = {styles.btn} onPress={this.props.handlepress.bind(this,this.state.Value)} >
                            Search
                        </Button>
                        <Button theme={{ colors: { primary: '#1B2433'}}} mode="outlined" style = {styles.btn} onPress = {this.props.cancelbutton}>
                            Cancel
                        </Button>
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    )

    }
}

export default Search


const styles = StyleSheet.create({
    mainview: {
        flex : 1,
        flexDirection : "column",
        justifyContent : "center",
        padding : 30,
        backgroundColor : "#00E1FD"
    },
    textinput: {
        marginBottom : 10,
        borderColor : "#1B2433"
    },
    btn : {
        flex : 1,
        borderColor: 'transparent'
        
    },
    btnview : {
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center",
    }
  })