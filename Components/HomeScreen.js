import React , {Component} from "react";
import {View , ActivityIndicator, Text} from "react-native";
import publicIP from 'react-native-public-ip';
import Header from './Header'
import * as Font from "expo-font"
import Search from "./Search";
import {countries} from 'country-data';
import styles from './Styles'


class HomeScreen extends Component{

    state = {
        weather : null,
        tosearch : null,
        visible : false,
        error : false
    }

    visiblechange = () =>
    {
        this.setState({visible : true});
    }

    cancelbutton = () =>
    {
        this.setState({visible : false});
    }

    handleapipress = (value) =>
    {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + value +`&appid=7f0a7331f71981a08dd1edda80c15c43`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            if (data.cod === '404')
            {
                this.setState({error : true});
            }
            else{
                this.setState({error : false});
                this.setState({weather : data}); 
            }         
        })
        .catch(error => {
            console.log(error);
        })
        this.cancelbutton();
    }

    componentDidMount()
    {
        Font.loadAsync({
            regular : require('../assets/fonts/RobotoCondensed-Regular.ttf')
        });
        publicIP()
        .then(ip => {
            fetch(`http://ip-api.com/json/${ip}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                let location = data.city;
                this.setState({country : data.country})
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + location +`&appid=7f0a7331f71981a08dd1edda80c15c43`)
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
            return (
                <View style = {styles.center}>
                    <ActivityIndicator animating = {true} size="large" color="#00E1FD" />
                </View>
            )
        }
        return(
            <React.Fragment>
            <Header visiblechange = {this.visiblechange}/>
            <Search 
            handleapipress = {this.handleapipress}
            tosearch = {this.state.tosearch}
            error = {this.state.error}
            handlepress = {this.handlepress}
            cancelbutton = {this.cancelbutton}
            visible = {this.state.visible}
            />
            <View style = {styles.homestart}>
                <View style = {styles.topview}>
                    <View style = {styles.fortemp}>
                        <View style = {styles.superscript}>
                            <Text style = {styles.temp}>{(this.state.weather.main['temp'] - 273).toFixed(1)}</Text>
                            <Text style={styles.degree}>°C</Text>
                        </View>
                    </View>
                    <View style = {styles.locationtext}>
                        <Text style = {styles.citytext}>{countries[this.state.weather.sys.country].name}</Text>
                        <Text style = {styles.countrytext}>{this.state.weather.name}</Text>
                    </View>
                </View>
                <View style = {styles.bottomview}>
                    <View style = {styles.toprow}>
                        <View style = {styles.cell}>
                            <Text style = {styles.celltext}>Description</Text>
                            <Text style = {styles.cellbottomtext}>{this.state.weather.weather[0].main}</Text>
                        </View>
                        <View style = {styles.cell}>
                            <Text style = {styles.celltext}>Feels Like</Text>
                            <Text style = {styles.cellbottomtext}>{(this.state.weather.main.feels_like -273).toFixed(2)}</Text>

                        </View>
                        <View style = {styles.celllast}>
                            <Text style = {styles.celltext}>Humidity</Text>
                            <Text style = {styles.cellbottomtext}>{this.state.weather.main.humidity}</Text>

                        </View>
                    </View>
                    <View style = {{flexDirection : "row" , flex : 1}}>
                        <View style = {styles.cell}>
                            <Text style = {styles.celltext}>Pressure</Text>
                            <Text style = {styles.cellbottomtext}>{this.state.weather.main.pressure}</Text>

                        </View>
                        <View style = {styles.cell}>
                            <Text style = {styles.celltext}>Visibility</Text>
                            <Text style = {styles.cellbottomtext}>{this.state.weather.visibility}</Text>

                        </View>
                        <View style = {styles.celllast}>
                            <Text style = {styles.celltext}>Wind Speed</Text>
                            <Text style = {styles.cellbottomtext}>{this.state.weather.wind.speed}</Text>

                        </View>
                    </View>
                </View>
            </View>
            
            </React.Fragment>
        )
    }
}

export default HomeScreen;

