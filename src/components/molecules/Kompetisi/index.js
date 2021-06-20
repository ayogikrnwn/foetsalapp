import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {blogone, blogtwo} from '../../../assets';

const Kompetisi = ({img}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} />
    </TouchableOpacity>
  );
};

export default Kompetisi;

const styles = StyleSheet.create({
  
  container: {
    paddingLeft: 20,
    marginRight: -10
  },
});
