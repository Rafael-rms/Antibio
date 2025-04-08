


import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../../components/Header";

import { bacterias } from '../../../data/bacterias.json'
import { antibioticos } from '../../../data/antibioticos.json'

import { useRoute } from "@react-navigation/native";

export default function Resistance({ navigation }) {
  const route = useRoute();
  const { id } = route.params;

  console.log()

  const [modo, setModo] = useState("MIC"); // Estado para alternar

  const bacteria = bacterias.find((item) => item.id === id);
  const filteredAntibiotics = antibioticos.filter((item) =>
    bacteria.antibioticos.includes(item.id)
  );

  const alternarModo = () => {
    setModo((prev) => (prev === "MIC" ? "dd" : "MIC"));
  };

  return (
    <View style={styles.container}>
      <Header
        title="Resistência e tratamento"
        leftIcon="arrow-back"
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.subTitle}>
        Pontos de cortes para determinação da sensibilidade
      </Text>

      <TouchableOpacity style={styles.toggleButton} onPress={alternarModo}>
        <Text style={styles.toggleButtonText}>
          Alternar para {modo === "MIC" ? "Disco-Difusão" : "MIC"}
        </Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Droga</Text>
          <Text style={styles.headerText}>R</Text>
          <Text style={styles.headerText}>I</Text>
          <Text style={styles.headerText}>S</Text>
        </View>

        <FlatList
          data={filteredAntibiotics}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const dados = modo === "MIC" ? item.mic : item.dd;
            return (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.nome}</Text>
                <Text style={styles.cell}>{dados?.R ?? "-"}</Text>
                <Text style={styles.cell}>{dados?.I ?? "-"}</Text>
                <Text style={styles.cell}>{dados?.S ?? "-"}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
    color: "#555",
    fontStyle: "italic",
  },
  toggleButton: {
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#4DB6AC",
    borderRadius: 20,
  },
  toggleButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 5,
    elevation: 3,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#4DB6AC",
    paddingVertical: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    color: "#333",
    fontSize: 14,
  },
});



