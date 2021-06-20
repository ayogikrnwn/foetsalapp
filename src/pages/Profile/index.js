import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, TouchableOpacityBase} from 'react-native';
import { HeaderProfile, CardProf } from '../../components';

const Profile = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <View style={styles.page}>
      <CardProf title="Kompetisi Yang Diikuti" />
      <CardProf title="Tentang Aplikasi" />
      <TouchableOpacity>
      <Text style={styles.txtlogout}>Log Out</Text>
      </TouchableOpacity>
     
      </View>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1EAE98',
    flex: 1,
  },
  page:{
    backgroundColor: '#FAFAFA',
    flex: 1,
    marginTop: 10,
    padding: 29,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  txtlogout: {
    textAlign: 'center',
    marginTop: 16,
    fontFamily: 'Poppins-Bold',
   color: '#233E8B',
   fontSize: 16,
   
  }
 
});

