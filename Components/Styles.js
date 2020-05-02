import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    homestart: {
        flex : 1,
    },
    topview : {
        flex : 1 , 
        backgroundColor : "#00E1FD"
    },
    fortemp : {
        flex : 1 , 
        justifyContent : "flex-end" , 
        alignItems :"center"
    },
    temp : {
        fontFamily: "regular" , 
        fontSize : 90 , 
        letterSpacing : -5
    },
    locationtext : {
        flex : 0.8 , 
        alignItems : "center"
    },
    citytext : {
        fontFamily: "regular" , 
        fontSize : 40
    },
    countrytext : {
        fontFamily: "regular" , 
        fontSize : 30
    },
    bottomview : {
        flex : 0.9, 
        padding : 5, 
        backgroundColor : "#1B2433"
    },
    toprow:  {
        flexDirection : "row" , 
        flex : 1,
        borderBottomWidth : 2,
        borderBottomColor : "#00E1FD"
    },
    cell : {
        flex : 1 , 
        justifyContent : "center" , 
        alignItems : "center" , 
        borderColor : "#00E1FD" , 
        borderRightWidth : 2
    },
    celllast : {
        flex : 1 , 
        justifyContent : "center" , 
        alignItems : "center" , 
        borderColor : "#00E1FD" , 
    },
    celltext : {
        color : "white",
        fontSize : 15,
        fontFamily : "regular"
    },
    cellbottomtext : {
        color : "white",
        paddingTop : 10,
    },
    center : {
        flex : 1,
        flexDirection :'row',
        justifyContent : "center",
        alignItems : "center",
    },
    degree : {
        fontSize : 30,
        letterSpacing : 1,
        lineHeight : 80,
        fontFamily :"regular"
    },
    superscript : {
        flexDirection: 'row', 
        alignItems: 'flex-start'
    }
})

export default styles;