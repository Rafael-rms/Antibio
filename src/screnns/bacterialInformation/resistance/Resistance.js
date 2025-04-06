


import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Header from "../../../components/Header";

const data = [
  { id: "1", droga: "Amoxicilina", R: "≥8", I: "4", S: "≤2" },
  { id: "2", droga: "Ciprofloxacino", R: "≥4", I: "2", S: "≤1" },
  { id: "3", droga: "Ceftriaxona", R: "≥2", I: "1", S: "≤0.5" },
  { id: "4", droga: "Azitromicina", R: "≥8", I: "4", S: "≤2" },
  { id: "5", droga: "Eritromicina", R: "≥8", I: "4", S: "≤2" },
  { id: "6", droga: "Clindamicina", R: "≥4", I: "2", S: "≤1" },
  { id: "7", droga: "Gentamicina", R: "≥16", I: "8", S: "≤4" },
  { id: "8", droga: "Vancomicina", R: "≥16", I: "8", S: "≤4" },
  { id: "9", droga: "Linezolida", R: "≥8", I: "4", S: "≤2" },
  { id: "10", droga: "Tigeciclina", R: "≥2", I: "1", S: "≤0.5" },
  { id: "11", droga: "Daptomicina", R: "≥2", I: "1", S: "≤0.5" },
  { id: "12", droga: "Meropenem", R: "≥8", I: "4", S: "≤2" },
  { id: "13", droga: "Imipenem", R: "≥8", I: "4", S: "≤2" },
  { id: "14", droga: "Cefepime", R: "≥16", I: "8", S: "≤4" },
  { id: "15", droga: "Ceftazidima", R: "≥16", I: "8", S: "≤4" },
  { id: "16", droga: "Ampicilina", R: "≥8", I: "4", S: "≤2" },
  { id: "17", droga: "Piperacilina/Tazobactam", R: "≥16", I: "8", S: "≤4" },
  { id: "18", droga: "Tetraciclina", R: "≥8", I: "4", S: "≤2" },
  { id: "19", droga: "Doxiciclina", R: "≥8", I: "4", S: "≤2" },
  { id: "20", droga: "Minociclina", R: "≥8", I: "4", S: "≤2" },
  { id: "21", droga: "Levofloxacino", R: "≥4", I: "2", S: "≤1" },
  { id: "22", droga: "Moxifloxacino", R: "≥4", I: "2", S: "≤1" },
  { id: "23", droga: "Nitrofurantoína", R: "≥128", I: "64", S: "≤32" },
  { id: "24", droga: "Fosfomicina", R: "≥256", I: "128", S: "≤64" },
  { id: "25", droga: "Rifampicina", R: "≥4", I: "2", S: "≤1" },
  { id: "26", droga: "Colistina", R: "≥4", I: "2", S: "≤1" },
  { id: "27", droga: "Polimixina B", R: "≥4", I: "2", S: "≤1" },
  { id: "28", droga: "Trimetoprima/Sulfametoxazol", R: "≥4", I: "2", S: "≤1" },
  { id: "29", droga: "Cefazolina", R: "≥16", I: "8", S: "≤4" },
  { id: "30", droga: "Cefuroxima", R: "≥16", I: "8", S: "≤4" },
];

export default function Resistance({ navigation }) {
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

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Droga</Text>
          <Text style={styles.headerText}>R</Text>
          <Text style={styles.headerText}>I</Text>
          <Text style={styles.headerText}>S</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.cell1}>{item.droga}</Text>
              <Text style={styles.cell}>{item.R}</Text>
              <Text style={styles.cell}>{item.I}</Text>
              <Text style={styles.cell}>{item.S}</Text>
            </View>
          )}
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
    marginBottom: 6,
    color: "#555",
    fontStyle: "italic",
  },
  card: {
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
  cell1: {
    flex: 2,
    textAlign: "left",
    color: "#333",
    fontSize: 14,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    color: "#333",
    fontSize: 14,
  },
});
