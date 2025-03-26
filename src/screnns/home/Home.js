

import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function Home({navigation}) {
  return (
    <>
      <Header 
        title='Início'
        rightIcon="settings"
        onPress={()=> navigation.navigate("Login")}
      />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
    
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