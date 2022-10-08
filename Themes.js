import { StyleSheet } from "react-native";

export const BasicTheme = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex:1
    },
    ScrollView: {
        paddingTop:80,
        paddingLeft: 100
    },
    text: {
        paddingBottom:5,
        paddingTop:5
    },
    input: {
        backgroundColor:'grey',
        fontSize: 20,
        width:150,
        color:'white'

    },
    radio: {
        paddingBottom:10,
        paddingTop:10
    },
    button: {
        paddingRight:20
    }
});

export const FancyTheme = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
    },
    ScrollView: {
        paddingTop:100,
        paddingLeft: 50,
    },
    text: {
        paddingBottom:5,
        paddingTop:5,
        color: 'white'
    },
    input: {
        backgroundColor:'white',
        fontSize: 20,
        width:150,

    },
    radio: {
        paddingBottom:10,
        paddingTop:10,
        
    },
});