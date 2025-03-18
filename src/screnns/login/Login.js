import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('TabRoutes')}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#17b4a6',
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
});