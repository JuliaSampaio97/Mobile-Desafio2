import React from "react";
import { TouchableHighlight, StyleSheet, Text, View, findNodeHandle, Alert } from "react-native";

const SuperButton = (props) => {
    return (
        <TouchableHighlight
            style={style.SuperButton}
            onPress={() => Alert.alert("Seja bem-vindo!")}
        >

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
        backgroundColor: "#20B2AA",
        padding: 20,
        width: 330,
        borderRadius: 6,
        marginBottom: 25

    },

    valor: {
        fontSize: 20,
        color: "#E0FFFF",
        fontWeight: 'bold'
    }

});

export default SuperButton;
