import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Details() {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Detalhes de Transações</Text>

            <Text style={styles.text1}>Total de receitas: R$1320,00</Text>
            <Text style={styles.text1}>Total de despesas: R$569,00</Text>
            <Text style={styles.text1}>Total de disponível: R$751,00</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0FFFF',
    },

    text: {
        fontSize: 30,
        color: '#20B2AA',
        marginVertical: 50

    },

    text1: {
        fontSize: 25,
        color: '#20B2AA',
        marginTop: 20,

    },

});
