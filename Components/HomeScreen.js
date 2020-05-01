import React , {Component} from "react";
import {View , StyleSheet , ActivityIndicator, Text , Image, TouchableOpacity} from "react-native";
import publicIP from 'react-native-public-ip';
import Header from './Header'
import * as Font from "expo-font"


class HomeScreen extends Component{

    state = {
        weather:  null,
        country : null,
    }

    componentDidMount()
    {
        Font.loadAsync({
            regular : require('../assets/fonts/RobotoCondensed-Regular.ttf'),
        });
        // publicIP()
        // .then(ip => {
        //     fetch(`http://ip-api.com/json/${ip}`)
        //     .then((resp) => {
        //         return resp.json();
        //     })
        //     .then((data) => {
        //         let location = data.city;
        //         this.setState({country : data.country})
        //         fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + location +`&appid=50a7aa80fa492fa92e874d23ad061374`)
        //         .then((resp) => {
        //             return resp.json();
        //         })
        //         .then((data) => {
        //             this.setState({weather : data});
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        // })
        // .catch(error => {
        //     console.log(error);
        // });
    }

    render()
    {
        // if(!this.state.weather){
        //     return(
        //         <View style = {styles.center}>
        //             <ActivityIndicator animating = {true} size="large" color="#00E1FD" />
        //         </View>
        //     )
        // }
        return(
            <React.Fragment>
            <Header/>
            <View style = {styles.homestart}>
                <View style = {{flex : 1 , backgroundColor : "#00E1FD"}}>
                    <View style = {{flex : 1 , justifyContent : "flex-end" , alignItems :"center"}}>
                        <Text style = {{fontFamily: "regular" , fontSize : 90 , letterSpacing : -5}}>30.1</Text>
                    </View>
                    <View style = {{flex : 0.8 , alignItems : "center"}}>
                        <Text style = {{fontFamily: "regular" , fontSize : 40}}>Mumbai</Text>
                        <Text style = {{fontFamily: "regular" , fontSize : 30}}>India</Text>
                    </View>
                </View>
                <View style = {{flex : 0.9, padding : 5, backgroundColor : "#1B2433"}}>
                    <View style = {{flexDirection : "row" , flex : 1}}>
                        <View style = {{flex : 1 , justifyContent : "center" , alignItems : "center" , borderColor : "white" , borderWidth : 2}}>
                            <Text style = {{color : "white"}}>F</Text>
                        </View>
                        <View style = {{flex : 1,justifyContent : "center" , alignItems : "center", borderColor : "white" , borderWidth : 2}}>
                            <Text style = {{color : "white"}}>F</Text>
                        </View>
                        <View style = {{flex : 1, justifyContent : "center" , alignItems : "center", borderColor : "white" , borderWidth : 2}}>
                            <Text style = {{color : "white"}}>F</Text>
                        </View>
                    </View>
                    <View style = {{flexDirection : "row" , flex : 1}}>
                        <View style = {{flex : 1 , justifyContent : "center" , alignItems : "center", borderColor : "white" , borderWidth : 2}}>
                            <Text style = {{color : "white"}}>F</Text>
                        </View>
                        <View style = {{flex : 1,justifyContent : "center" , alignItems : "center", borderColor : "white" , borderWidth : 2}}>
                            <Text style = {{color : "white"}}>F</Text>
                        </View>
                        <View style = {{flex : 1, justifyContent : "center" , alignItems : "center", borderColor : "white" , borderWidth : 2}}>
                            <Text style = {{color : "white"}}>F</Text>
                        </View>
                    </View>
                </View>
            </View>
            
            </React.Fragment>
        )
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
    homestart: {
        flex : 1,
    },
})
