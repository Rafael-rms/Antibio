

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
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleEmoji}>🔬</Text>
          <Text style={styles.titleText}>Informações Laboratoriais</Text>
        </View>

        {/* Card: Meios de Cultura */}
        <View style={[styles.card, { borderLeftColor: "#5cb85c", backgroundColor: "#e8f5e9" }]}>
          <Text style={styles.cardTitle}>🧫 Meios de Cultura</Text>
          <View style={styles.linhaPasso}>
            <Text style={styles.ponto}>•</Text>
            <Text style={styles.cardText}>
              Ágar MacConkey – Seletivo para Gram-negativos e indica fermentação de lactose (colonias rosadas).
            </Text>
          </View>
          <View style={styles.linhaPasso}>
            <Text style={styles.ponto}>•</Text>
            <Text style={styles.cardText}>
              Ágar Sangue – Avaliação da hemólise (α, β ou γ).
            </Text>
          </View>
          <View style={styles.linhaPasso}>
            <Text style={styles.ponto}>•</Text>
            <Text style={styles.cardText}>
              Ágar CLED – Útil para uroculturas e diferencia lactose.
            </Text>
          </View>
          <View style={styles.linhaPasso}>
            <Text style={styles.ponto}>•</Text>
            <Text style={styles.cardText}>
              Ágar XLD – Diferencia Salmonella e Shigella.
            </Text>
          </View>
        </View>

        {/* Card: Testes Bioquímicos */}
        <View style={[styles.card, { borderLeftColor: "#0275d8", backgroundColor: "#e1f0ff" }]}>
          <Text style={styles.cardTitle}>🧪 Testes Bioquímicos</Text>
          {[
            "Teste da Oxidase – Negativo para Enterobacterales.",
            "Fermentação de Lactose – Positiva para E. coli, Klebsiella, Enterobacter.",
            "Produção de Indol – Positiva em E. coli.",
            "Citrato – Positivo para Klebsiella e Enterobacter.",
            "TSI – Fermentação de glicose, lactose e sacarose + produção de gás e H₂S.",
            "Urease – Positiva em Proteus e Klebsiella.",
            "Mobilidade – Positiva em E. coli, negativa em Klebsiella.",
          ].map((texto, i) => (
            <View key={i} style={styles.linhaPasso}>
              <Text style={styles.ponto}>•</Text>
              <Text style={styles.cardText}>{texto}</Text>
            </View>
          ))}
        </View>

        {/* Card: Observações */}
        <View style={[styles.card, { borderLeftColor: "#f0ad4e", backgroundColor: "#fff8e1" }]}>
          <Text style={styles.cardTitle}>📌 Observações</Text>
          <View style={styles.linhaPasso}>
            <Text style={styles.ponto}>•</Text>
            <Text style={styles.cardText}>
              As Enterobacterales são geralmente bacilos Gram-negativos, fermentadores de glicose.
            </Text>
          </View>
          <View style={styles.linhaPasso}>
            <Text style={styles.ponto}>•</Text>
            <Text style={styles.cardText}>
              Crescem bem em meios comuns e são facultativamente anaeróbios.
            </Text>
          </View>
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
    padding: 20,
    alignItems: "center",
  },
  // Novo título estilizado
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    gap: 8,
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  titleEmoji: {
    fontSize: 26,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderLeftWidth: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  cardText: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    flex: 1,
  },
  linhaPasso: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  ponto: {
    marginRight: 8,
    fontSize: 18,
    lineHeight: 22,
    color: "#999",
  },
});
