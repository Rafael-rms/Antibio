
import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';

export default function Header({ 
  title, 
  leftIcon, 
  onPress, 
  rightIcon, 
}) {
  return (
    <View style={styles.container}>  
      <StatusBar style="light" />
      
      {/* Botão Esquerdo (se existir) */}
      {leftIcon && (
        <TouchableOpacity style={styles.leftButton} onPress={onPress}>
          <Icon name={leftIcon} size={30} color="white" />
        </TouchableOpacity>
      )}
      
      {/* Título */}
      <Text style={styles.text}>{title}</Text>
      
      {/* Botão Direito (se existir) */}
      {rightIcon && (
        <TouchableOpacity style={styles.rightButton} onPress={onPress}>
          <Icon name={rightIcon} size={30} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17b4a6',
    height: 80,
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  leftButton: {
    position: 'absolute',
    left: 16,
    top: '58%',
    // transform: [{ translateY: -15 }],
  },
  rightButton: {
    position: 'absolute',
    right: 16,
    top: '58%',
    // transform: [{ translateY: -15 }],
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});
