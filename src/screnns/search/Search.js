

import Header from "../../components/Header";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { bacterias } from "../../data/bacterias.json";


export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(bacterias);


  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === "") {
      setFilteredData(bacterias);
    } else {
      const filtered = bacterias.filter((item) =>
        item.nome.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };


  return (
    <>
      <Header title="Buscar" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="#17b4a6" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar microrganismo..."
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor="#aaa"
          />
        </View>

        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("BacterialInformation", { id: item.id })}
              >
                <Text style={styles.itemText}>{item.nome}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#17b4a6" />
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text style={styles.noResults}>Nenhum resultado encontrado</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e6f7f6",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    color: "#333",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  noResults: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 30,
  },
});
