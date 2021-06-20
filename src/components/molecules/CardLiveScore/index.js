import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardLiveScore = () => {
  return (
    <View style={styles.container}>
      <View style={styles.timone}>
        <Text style={styles.tim}>Tim 1</Text>
      </View>

      <Text style={styles.title}>2</Text>

      <View style={styles.vscard}>
        <Text style={styles.vs}>VS</Text>
      </View>

      <Text style={styles.title}>2</Text>
      <View style={styles.timtwo}>
        <Text style={styles.tim}>Tim 2</Text>
      </View>
    </View>
  );
};

export default CardLiveScore;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  timone: {
    width: 70,
    height: 41,
    backgroundColor: '#1EAE98',
  },
  timtwo: {
    width: 70,
    height: 41,
    backgroundColor: '#233E8B',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
  },
  tim: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 7,
    color: 'white',
  },
  vs: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textAlign: 'center',
    color: 'grey',
  },
  vscard: {
      width: 37,
      height: 41,
      backgroundColor: '#C6C3C3',
    
  }
});
