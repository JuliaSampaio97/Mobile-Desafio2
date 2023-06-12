import React from "react";
import { TouchableHighlight, StyleSheet, Text, View, } from "react-native";

const SuperButton2 = (props) => {
    return (
        <TouchableHighlight
            style={style.SuperButton2}>

            <View style={style.button}>

                <Text style={style.valor}>{props.valor}</Text>

            </View>

        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    SuperButton: {

    },

    button: {

        alignItems: 'center',
        backgroundColor: '#E0FFFF',
        padding: 10,
        width: 700,
        marginLeft: 200
    },

    valor: {
        fontSize: 15,
        color: '#20B2AA',
        textDecorationLine: 'underline'
    }

});

export default SuperButton2;

