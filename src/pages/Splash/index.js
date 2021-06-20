import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoApp} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <LogoApp />
      <Text style={styles.text}>Foet-Sal</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
  },
});
