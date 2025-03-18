import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../../../components/Header";

export default function Features() {
    return (
        <>
            <Header title='Características'/>
            <ScrollView style={styles.Container}>
                <Text style={styles.infoText}>Nome: Escherichia coli</Text>
                <Text style={styles.infoText}>Gram: Negativo</Text>
                <Text style={styles.infoText}>Família: Enterobacteriaceae</Text>
                <Text style={styles.infoText}>Morfologia: Bacilo</Text>
                <Text style={styles.infoText}>Descrição: Bactéria comum na microbiota intestinal, mas pode causar infecções.</Text>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f4f4f4",
    },
    infoText: {
        fontSize: 18,
        marginBottom: 5,
    }
});


