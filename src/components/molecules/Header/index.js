import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { pict, Notif } from '../../../assets';

const Header = ({onPress}) => {
  return (
    <View style={styles.header}>
      <Image source={pict} />
      <View style={styles.titlehead}>
        <Text style={styles.text}>Selamat Datang</Text>
        <Text style={styles.name}>Ayogi Kurniawan</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
      <Notif />
      </TouchableOpacity>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingTop: 30,
  },
  titlehead: {
    paddingLeft: 12,
    justifyContent: 'space-between',
    marginRight: 80,
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: 'white',
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: 'white',
  },
});
