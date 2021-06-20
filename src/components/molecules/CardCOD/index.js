import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {IcCOD} from '../../../assets';

const CardCOD = ({img, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={img} />
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CardCOD;

const styles = StyleSheet.create({
  container: {
    width: 301,
    height: 56,
    backgroundColor: '#EFEFEF',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingLeft: 15,
    marginBottom: 20,
  },
  title: {
    paddingTop: 10,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 7,
    fontSize: 16,
  },
});
