import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Header({title, navigation, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
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
    width: '100%',
  },
  button: {
    position: 'absolute',
    left: 12,
    bottom: 14
  },
  text: {
    
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 15
  },

});