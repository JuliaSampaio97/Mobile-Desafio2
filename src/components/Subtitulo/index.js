import React from "react";
import { Text, StyleSheet } from "react-native";


function Subtitulo(props) {
    return (
        <Text style={css.subtitulo}>{props.subtitulo}</Text>
    );
}

const css = StyleSheet.create({
    subtitulo: {
        color: '#20B2AA',
        fontSize: 18,
        marginBottom: 1


    }
})

export default Subtitulo;