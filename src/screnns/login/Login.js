import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerlogo}>
        <Image
          style={styles.image}
          source={require('../../assets/antibio.png')}
        />
      </View>
      <View style={styles.containerLogin}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
        />

        <TouchableOpacity style={styles.buttonRecSENHA}>
          <Text style={styles.textRecSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

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

        <View style={styles.containerCadastrar}>
          <Text style={styles.textButtonCadastrar}>
            Ainda não tem uma conta?
          </Text>
          <TouchableOpacity
            style={styles.buttonCadastrar}
          >
            <Text style={styles.textCadastrar}> Cadastre-se</Text>
          </TouchableOpacity>
        </View>

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
    borderBottomRightRadius: 220,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  image: {
    width: '70%',
    height: '80%',
  },
  containerLogin: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    paddingTop: 55
  },
  input: {
    backgroundColor: 'white',
    width: '90%',
    height: 55,
    borderRadius: 15,
    marginBottom: 25,
    fontSize: 20,
    paddingLeft: 15
  },
  buttonRecSENHA: {
    // backgroundColor: 'green',
    width: '90%',
    alignItems: 'flex-end',
    padding: 8,
    position: 'absolute',
    top: 102
  },
  textRecSenha: {
    color: '#f0f0f0',
    fontSize: 15,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#F57C00',
    width: '90%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  containerCadastrar: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  buttonCadastrar: {
    // backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center'

  },
  textButtonCadastrar: {
    color: 'white',
    fontSize: 15
  },
  textCadastrar: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  }
});


