import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Register({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    // Aqui você pode integrar com Firebase ou sua lógica de cadastro
    console.log({ nome, email, senha });
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#17b4a6" />

      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons name="account-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            placeholderTextColor="#888"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons name="lock-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#888"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons name="lock-check-outline" size={24} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            placeholderTextColor="#888"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textVoltarLogin}>Já tem uma conta? Faça login</Text>
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
  form: {
    width: '100%',
    alignItems: 'center',
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
  button: {
    backgroundColor: '#F57C00',
    width: '90%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 15,
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
  textVoltarLogin: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
  },
});
