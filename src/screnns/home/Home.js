

import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Header title='Início'/>
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