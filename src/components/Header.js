import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#17b4a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 15
  }

});