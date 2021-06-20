import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Field} from '../../../assets';
import { ButtonPurple } from '../..';

const CardBooking = ({onPress, title, time, harga}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pict}>
        <Field />
      </View>
        <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{time}</Text>
      <Text style={styles.desc}>{harga}</Text>
      <ButtonPurple label="Booking" onPress={onPress} />
        </View>
      
    </View>
  );
};

export default CardBooking;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F8',
    width: 160,
    height: 194,
    marginRight: 10
  },
  pict: {
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
      textAlign: 'center',
      marginTop: 6,
      fontFamily: 'Poppins-Bold',
      fontSize: 14

  },
  desc: {
      fontFamily: 'Poppins-Light',
      fontSize: 12,
      textAlign: 'center'
  },
  content: {
      padding: 10
  }
});
