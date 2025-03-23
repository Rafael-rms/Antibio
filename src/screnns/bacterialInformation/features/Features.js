import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../../../components/Header";

export default function Features({navigation}) {
    return (
        <View style={styles.Container}>
            <Header 
                title='Características'
                onPress={()=> navigation.goBack()}
            />
            <View style={styles.card}>
            
                <Text style={styles.infoText}>Nome: Escherichia coli</Text>
                <Text style={styles.infoText}>Gram: Negativo</Text>
                <Text style={styles.infoText}>Família: Enterobacteriaceae</Text>
                <Text style={styles.infoText}>Morfologia: Bacilo</Text>
                <Text style={styles.infoText}>Descrição: Bactéria comum na microbiota intestinal, mas pode causar infecções.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'

    },
    card: {
        backgroundColor: "#3FC6B8",
        marginTop: 15,
        width: '95%',
        height: 'auto',
        padding: 10,
        borderRadius: 15
    },
    infoText: {
        fontSize: 22,
        marginBottom: 5,
        color: 'white',
        fontWeight: 'bold'
    }
});


