
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Header from "../../../components/Header";


export default function Laboratory({navigation}) {
    return (
        <View style={styles.container}>
            <Header 
                title='Laboratorial'
                onPress={() => navigation.goBack()}
            />
            <ScrollView >
                
                <Text style={styles.title}>🔬 Informações Laboratoriais</Text>
                <Text style={styles.cardTitle}>🧫 Meios de Cultura</Text>
                <Text style={styles.infoText}>- Ágar MacConkey: Seletivo para Gram-negativos</Text>
                <Text style={styles.infoText}>- Ágar Sangue: Diferencia hemólise</Text>
                <Text style={styles.cardTitle}>🧪 Testes de Identificação</Text>
                <Text style={styles.infoText}>- Oxidase: Negativo</Text>
                <Text style={styles.infoText}>- Fermentação de lactose: Positiva</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f4f4f4",
      width: '100%'
      
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      marginBottom: 15,
      color: "#333",
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 15,
      marginBottom: 5,
      color: "#555",
    },
    infoText: {
      fontSize: 18,
      marginBottom: 5,
      color: "#666",
    }
  });