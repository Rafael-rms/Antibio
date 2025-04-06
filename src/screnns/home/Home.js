

import React from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Início" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Título & subtítulo */}
        <Text style={styles.welcome}>👋 Bem-vindo ao MicroBio App</Text>
        <Text style={styles.subtitle}>Explore conteúdos essenciais da microbiologia de forma simples e prática.</Text>

        {/* Dica do dia */}
        <View style={styles.card}>
          <Text style={styles.title}>💡 Dica do Dia</Text>
          <Text style={styles.tipText}>
            Embora as bactérias sejam microrganismos minúsculos, com tamanhos entre 0,2 e 10 micrômetros, elas têm um impacto enorme no nosso mundo. Algumas são essenciais para a digestão, enquanto outras podem causar doenças graves.
          </Text>
        </View>

        {/* Botões de categorias */}
        <Text style={styles.sectionTitle}>📚 Categorias</Text>
        <View style={styles.buttonContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => item.screen && navigation.navigate(item.screen)}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={styles.buttonText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const categories = [
  { label: "Meios de Cultura", emoji: "🧫", screen: null },
  { label: "Colorações", emoji: "🎨", screen: null },
  { label: "Materiais x Meios", emoji: "🧪", screen: null },
  { label: "Técnicas Lab.", emoji: "🔬", screen: null },
  { label: "Tipos de Bactérias", emoji: "🦠", screen: null },
  { label: "Antibióticos", emoji: "💊", screen: null },
  { label: "Resistência", emoji: "⚠️", screen: null },
  { label: "Testes Bioquímicos", emoji: "🧬", screen: null },
  { label: "Protocolos Clínicos", emoji: "📋", screen: null },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    width: "100%",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#006f60",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#ffcc00",
    padding: 16,
    borderRadius: 15,
    marginBottom: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
  tipText: {
    fontSize: 15,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006f60",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "95%",
  },
  button: {
    backgroundColor: "#17b4a6",
    padding: 12,
    borderRadius: 10,
    margin: 6,
    height: 100,
    width: "28%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
    marginTop: 5,
  },
  emoji: {
    fontSize: 28,
  },
});


