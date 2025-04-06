

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../../components/Header";

export default function Features({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        title="Características"
        leftIcon="arrow-back"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Escherichia coli</Text>

        <View style={styles.item}>
          <Text style={styles.label}>👨‍👩‍👧‍👦 Família:</Text>
          <Text style={styles.value}>Enterobacteriaceae</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>🔬 Morfologia:</Text>
          <Text style={styles.value}>Bacilo</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>📌 Gram:</Text>
          <Text style={styles.value}>Negativo</Text>
        </View>



        <View style={styles.item}>
          <Text style={styles.label}>🧾 Descrição:</Text>
          <Text style={styles.value}>
            Bactéria comum da microbiota intestinal. Pode causar infecções
            urinárias, gastroenterites, meningite neonatal e sepse.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  card: {
    backgroundColor: "#fff",
    marginTop: 20,
    width: "95%",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F57C00", // laranja usado nos outros cards
    marginBottom: 18,
    textAlign: "center",
  },
  item: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginTop: 3,
    lineHeight: 22,
  },
});
