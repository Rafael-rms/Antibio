
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../components/Header";

export default function BacterialInformation({ navigation }) {
  return (
    <>
      <Header
        title="Ficha Bacteriana"
        leftIcon="arrow-back"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.botton}
          onPress={() => navigation.navigate("Features")}
        >
          <Text style={styles.bottonText}>
            🦠 <Text style={styles.textLabel}>Geral</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botton}
          onPress={() => navigation.navigate("Laboratory")}
        >
          <Text style={styles.bottonText}>
            🔬 <Text style={styles.textLabel}>Laboratorial</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botton}
          onPress={() => navigation.navigate("Resistance")}
        >
          <Text style={styles.bottonText}>
            💊 <Text style={styles.textLabel}>Resistência & Tratamento</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botton}
          // onPress={() => navigation.navigate("EpidemiologiaClinica")}
        >
          <Text style={styles.bottonText}>
            📊 <Text style={styles.textLabel}>Epidemiologia & Clínica</Text>
          </Text>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2",
  },
  botton: {
    backgroundColor: "#17b4a6",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  textLabel: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

