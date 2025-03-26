import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../components/Header";

export default function BacterialInformation({navigation}) {
  return (
    <>
      <Header 
        title='Ficha Bacteriana'
        leftIcon="arrow-back"
        onPress={()=> navigation.goBack()}
      />
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Features")}
        >
          <Text style={styles.buttonText}>  
            <Text style={styles.emoji}>🦠</Text>  Geral
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Laboratory')}
          // onPress={() => navigation.navigate("Laboratorial")}
        >
          <Text style={styles.buttonText}>
            <Text style={styles.emoji}>🔬</Text>  Laboratorial
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("ResistenciaTratamento")}
        >
          <Text style={styles.buttonText}>
            <Text style={styles.emoji}>💊</Text>  Resistência & Tratamento

          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("EpidemiologiaClinica")}
        >
          <Text style={styles.buttonText}>
            <Text style={styles.emoji}>📊</Text>  Epidemiologia & Clínica
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop:20
  },
  button: {
    backgroundColor: "#17b4a6",
    padding: 15,
    borderRadius: 10,
    width: "95%",
    // alignItems: "center",
    // justifyContent:'center',
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  emoji: {
    fontSize: 30,
    marginRight: 10,
  }
});

