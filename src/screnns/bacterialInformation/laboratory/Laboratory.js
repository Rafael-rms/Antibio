

import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../../../components/Header";

export default function Laboratory({ navigation }) {
  return (
    <View style={styles.container}>
      <Header
        title="Laboratorial"
        leftIcon="arrow-back"
        onPress={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>🔬 Informações Laboratoriais</Text>

        {/* Card: Meios de Cultura */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧫 Meios de Cultura</Text>
          <Text style={styles.cardText}>• Ágar MacConkey – Seletivo para Gram-negativos e indica fermentação de lactose (colonias rosadas).</Text>
          <Text style={styles.cardText}>• Ágar Sangue – Avaliação da hemólise (α, β ou γ).</Text>
          <Text style={styles.cardText}>• Ágar CLED – Útil para uroculturas e diferencia lactose.</Text>
          <Text style={styles.cardText}>• Ágar XLD – Diferencia Salmonella e Shigella.</Text>
        </View>

        {/* Card: Testes Bioquímicos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧪 Testes Bioquímicos</Text>
          <Text style={styles.cardText}>• Teste da Oxidase – Negativo para Enterobacterales.</Text>
          <Text style={styles.cardText}>• Fermentação de Lactose – Positiva para E. coli, Klebsiella, Enterobacter.</Text>
          <Text style={styles.cardText}>• Produção de Indol – Positiva em E. coli.</Text>
          <Text style={styles.cardText}>• Citrato – Positivo para Klebsiella e Enterobacter.</Text>
          <Text style={styles.cardText}>• TSI – Fermentação de glicose, lactose e sacarose + produção de gás e H₂S.</Text>
          <Text style={styles.cardText}>• Urease – Positiva em Proteus e Klebsiella.</Text>
          <Text style={styles.cardText}>• Mobilidade – Positiva em E. coli, negativa em Klebsiella.</Text>
        </View>

        {/* Card: Observações */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📌 Observações</Text>
          <Text style={styles.cardText}>• As Enterobacterales são geralmente bacilos Gram-negativos, fermentadores de glicose.</Text>
          <Text style={styles.cardText}>• Crescem bem em meios comuns e são facultativamente anaeróbios.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    width: "100%",
  },
  scroll: {
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
    width: '95%'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#F57C00",
  },
  cardText: {
    fontSize: 16,
    color: "#444",
    marginBottom: 6,
    lineHeight: 22,
  },
});
