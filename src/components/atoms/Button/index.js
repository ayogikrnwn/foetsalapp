import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1EAE98',
    marginTop: 35,
    borderRadius: 10
  },
  text: {
      fontFamily: 'Poppins-Bold',
      textAlign: 'center',
      fontSize: 24,
      color: 'white'
  },
});
