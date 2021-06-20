import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Input = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType,
}) => {
  const [border, setBorder] = useState('#E9E9E9');
  const onFocusForm = () => {
    setBorder('#0066CB');
  };
  const onBlurForm = () => {
    setBorder('#E9E9E9');
  };
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        // keyboardType={keyboardType}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        // editable={!disable}
        // selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: '#C6BDBD',
    borderRadius: 10,
    padding: 12,
    marginBottom: 23
  }),
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    
  },
});
