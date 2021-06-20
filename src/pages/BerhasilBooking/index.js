import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {booksuccess} from '../../assets';

const BerhasilBooking = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={booksuccess} style={styles.img} />
        <Text style={styles.title}>Booking Berhasil</Text>
        <Text style={styles.desc}>Silahkan datang maximal 15 menit</Text>
        <Text style={styles.desc}>sebelum jam yang ditentukan. </Text>
        <Text style={styles.desc}>Selamat bermain. Bravo! </Text>
      </View>
    </View>
  );
};

export default BerhasilBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 240,
    height: 237,
  },
  content: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#233E8B',
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
  },
});
