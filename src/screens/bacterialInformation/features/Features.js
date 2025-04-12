

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../../components/Header";

import { useRoute } from "@react-navigation/native";

import { bacterias } from "../../../data/bacterias";

export default function Features({ navigation }) {

  const route = useRoute();
  const { id } = route.params;
  console.log(id)

  const bacteria = bacterias.find((item) => item.id === id);


  return (
    <View style={styles.container}>
      <Header
        title="Características"
        leftIcon="arrow-back"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.card}>
        <Text style={styles.title}>{bacteria.nome}</Text>

        <View style={styles.item}>
          <Text style={styles.label}>👨‍👩‍👧‍👦 Família:</Text>
          <Text style={styles.value}>{bacteria.familia}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>🔬 Morfologia:</Text>
          <Text style={styles.value}>{bacteria.morfologia}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>📌 Gram:</Text>
          <Text style={styles.value}> ====== Retirar</Text>
        </View>



        <View style={styles.item}>
          <Text style={styles.label}>🧾 Descrição:</Text>
          <Text style={styles.value}>{bacteria.descricao}</Text>
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
