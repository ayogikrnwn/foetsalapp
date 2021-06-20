import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Input} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.desc}>Ayo Main Sekarang</Text>
      <View style={styles.content}>
        <View style={styles.form}>
          <Input label="Email" />
          <Input label="Password" />
          <Button
            label="Login"
            onPress={() => navigation.navigate('MainApp')}
          />
          <View style={styles.linktodaftar}>
            <Text style={styles.textlight}>Belum Punya Akun?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.desclight}>Klik Disini</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
