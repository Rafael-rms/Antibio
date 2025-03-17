import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TabRoutes')}>
        <Text>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});