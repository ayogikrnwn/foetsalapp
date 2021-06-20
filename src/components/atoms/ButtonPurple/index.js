import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonPurple = ({onPress, label}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPurple;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#233E8B',
    marginTop: 10,
    borderRadius: 10,
    
  },
  text: {
      fontFamily: 'Poppins-Medium',
      textAlign: 'center',
      fontSize: 20,
      color: 'white'
  },
});
