import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Input} from '../../components';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Daftar</Text>
      <Text style={styles.desc}>Daftar Dulu Yuk!</Text>
      <View style={styles.content}>
        <View style={styles.form}>
        <Input label="Nama" />
          <Input label="Email" />
          <Input label="Password" />
          <Button label="Daftar" />
         
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1EAE98',
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 28,
    paddingLeft: 31,
    paddingTop: 44,
    color: 'white',
  },
  desc: {
    paddingLeft: 31,
    fontFamily: 'Poppins-Light',
    fontSize: 24,
    color: 'white',
  },
  content: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    marginTop: 16,
    paddingTop: 10,
    paddingLeft: 14,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    paddingTop: 30,
    paddingLeft: 25,
    padding: 24,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    paddingTop: 20,
  },
  linktodaftar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textlight: {
    fontFamily: 'Poppins-Light',
    paddingTop: 10,
  },
  desclight: {
    fontFamily: 'Poppins-Medium',
  },
});
