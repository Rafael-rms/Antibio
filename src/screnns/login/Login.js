import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerlogo}>

      </View>
      <View style={styles.containerLogin}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
        />

        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TabRoutes')}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17b4a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerlogo: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    borderBottomRightRadius: 200
  },
  containerLogin: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderRadius: 15,
    marginBottom: 25,
    fontSize: 20,
    paddingLeft: 15
  },
  button: {
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  text: {
    color: '#17b4a6',
    fontSize: 25,
    fontWeight: 'bold'
  }
});