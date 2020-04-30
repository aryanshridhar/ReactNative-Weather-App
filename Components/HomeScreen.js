import React , {Component} from "react";
import {View , StyleSheet , ActivityIndicator, Text} from "react-native";
import publicIP from 'react-native-public-ip';
import Header from './Header'
 


class HomeScreen extends Component{

    state = {
        weather:  null,
        country : null,
    }

    componentDidMount()
    {
        publicIP()
        .then(ip => {
            fetch(`http://ip-api.com/json/${ip}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                let location = data.city;
                this.setState({country : data.country})
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + location +`&appid=50a7aa80fa492fa92e874d23ad061374`)
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    this.setState({weather : data});
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                })
            })
            .catch((error) => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render()
    {
        if(!this.state.weather){
            return(
                <View style = {styles.center}>
                    <ActivityIndicator animating = {true} size="large" color="#0000ff" />
                </View>
            )
        }
        return(
            <React.Fragment>
            <Header/>
            <View style = {styles.homestart}>
                <View style = {styles.mainview}>
                    <View style = {{flexDirection : "row" , flex : 1}}>
                        <View style = {{flex :1}}>
                            {/* IMAGE */}
                        </View>
                        <View style = {{flex : 1 , justifyContent : "center" , alignItems :"flex-end"}}>
                            <Text style = {{fontSize : 25 , color : "#0195AE"}}>{this.state.country}</Text>
                            <Text style = {{fontSize : 30}}>{this.state.weather.name}</Text>
                            <Text style = {{fontSize : 20}}>{this.state.weather.weather[0].description.toUpperCase()}  {(this.state.weather.main.temp - 273).toFixed(2).toString() + " °C"}</Text>
                        </View>
                        <View style ={{flex : 0.3}}>

                        </View>
                    </View>
                </View>
                <View style = {styles.forecast}>

                </View>
            </View>
            </React.Fragment>
        )
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
    center : {
        flex : 1,
        flexDirection : "row",
        justifyContent : 'center',
        alignItems : "center"
    },
    mainview : {
        flex : 1,
        borderBottomColor : 'white',
        borderBottomWidth : 3,
    },
    homestart: {
        backgroundColor : '#00E1FD',
        flex : 1,
    },
    forecast : { 
        backgroundColor : '#1B2433',
        flex : 1.5,
    }
})
