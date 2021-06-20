import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcBack} from '../../assets';
import { CardLS } from '../../components';

const LiveScore = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IcBack onPress={() => navigation.navigate('MainApp')} />
        <View style={styles.txthead}>
          <Text style={styles.titlehead}>LIVE SCORE</Text>
        </View>
      </View>

      <View style={styles.page}>
          <Text style={styles.titlecomp}>Tour Cup 29</Text>
          <CardLS />
          <CardLS />
          <CardLS />
          <CardLS />
          <CardLS />
      </View>
    </View>
  );
};

export default LiveScore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1EAE98',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 25,
  },
  page: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 29,
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  txthead: {
    alignContent: 'center',
    flexDirection: 'row',
  },
  titlehead: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 20,
    marginLeft: 70,
  },
  titlecomp: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      textAlign: 'center'
  }
});
