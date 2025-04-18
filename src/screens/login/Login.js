

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#17b4a6" />

      <View style={styles.containerLogo}>
        <Image
          style={styles.image}
          source={require('../../assets/antibio.png')}
        />
      </View>

      <View style={styles.containerLogin}>
        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#888"
          />
        </View>

        <TouchableOpacity style={styles.buttonRecSenha}>
          <Text style={styles.textRecSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons name="lock-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#888"
            secureTextEntry
          />
        </View>

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
            onPress={() => navigation.navigate("Register")}
            style={styles.buttonCadastrar}>
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
  containerLogo: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderBottomRightRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  image: {
    width: '70%',
    height: '80%',
  },
  containerLogin: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    paddingTop: 40,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    height: 55,
    borderRadius: 15,
    marginBottom: 10,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  buttonRecSenha: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textRecSenha: {
    color: '#f0f0f0',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F57C00',
    width: '90%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerCadastrar: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    marginTop: 20,
  },
  textButtonCadastrar: {
    color: 'white',
    fontSize: 15,
  },
  textCadastrar: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  buttonCadastrar: {},
});



