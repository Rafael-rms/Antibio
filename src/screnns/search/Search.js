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

const microorganismos = [
  { id: "1", name: "Escherichia coli" },
  { id: "2", name: "Staphylococcus aureus" },
  { id: "3", name: "Pseudomonas aeruginosa" },
  { id: "4", name: "Klebsiella pneumoniae" },
  { id: "5", name: "Streptococcus pneumoniae" },
  { id: "6", name: "Salmonella spp." },
  { id: "7", name: "Mycobacterium tuberculosis" },
  { id: "8", name: "Listeria monocytogenes" },
  { id: "9", name: "Clostridium difficile" },
  { id: "10", name: "Helicobacter pylori" },
  { id: "11", name: "Campylobacter jejuni" },
  { id: "12", name: "Bacillus cereus" },
  { id: "13", name: "Vibrio cholerae" },
  { id: "14", name: "Neisseria meningitidis" },
  { id: "15", name: "Haemophilus influenzae" },
  { id: "16", name: "Legionella pneumophila" },
  { id: "17", name: "Yersinia enterocolitica" },
  { id: "18", name: "Shigella dysenteriae" },
  { id: "19", name: "Proteus mirabilis" },
  { id: "20", name: "Serratia marcescens" },
  { id: "21", name: "Acinetobacter baumannii" },
  { id: "22", name: "Corynebacterium diphtheriae" },
  { id: "23", name: "Bordetella pertussis" },
  { id: "24", name: "Treponema pallidum" },
  { id: "25", name: "Borrelia burgdorferi" },
  { id: "26", name: "Leptospira interrogans" },
  { id: "27", name: "Chlamydia trachomatis" },
  { id: "28", name: "Rickettsia rickettsii" },
  { id: "29", name: "Brucella spp." },
  { id: "30", name: "Francisella tularensis" },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(microorganismos);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === "") {
      setFilteredData(microorganismos);
    } else {
      const filtered = microorganismos.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <Header title='Buscar'/>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar microrganismo..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>{item.name}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#888" />
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
    backgroundColor: "#f8f9fa",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    height: 50,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500",
  },
  noResults: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
});