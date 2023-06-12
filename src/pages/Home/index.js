import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Bem vindo a JSB Tech - Controle Financeiro</Text>

            <Text style={styles.text1}>Aqui você pode adicionar as suas transações de qualquer lugar!</Text>

            <Text style={styles.text1}>Saiba para onde vai o seu dinheiro e o total de gastos e receitas mensais!</Text>


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
        marginVertical: 50,


    },

    text1: {
        fontSize: 25,
        color: '#20B2AA',
        marginTop: 20,
        marginHorizontal: 30,

    },

});

