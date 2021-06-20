import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack, IcCOD} from '../../assets';
import {CardCOD} from '../../components';

const Konfirmasi = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity >
          <IcBack onPress={() => navigation.navigate('MainApp')}/>
        </TouchableOpacity>
        <View style={styles.txthead}>
          <Text style={styles.titlehead}>Konfirmasi</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}> Kamu Sudah Pilih</Text>
        <Text style={styles.notesone}> Booking Jam </Text>
        <Text style={styles.notes}> 10.00 </Text>
        <View style={styles.border}></View>
        <Text style={styles.text}> Silahkan Pilih Metode Pembayaran</Text>
        <CardCOD
          img={IcCOD}
          label="Bayar Di Tempat"
          onPress={() => navigation.navigate('BerhasilBooking')}
        />
        <View style={styles.border}></View>
        <Text style={styles.text}> Notes</Text>
        <Text style={styles.notes}>
          Metode Pembayaran Lain Segera Tersedia.
        </Text>
      </View>
    </View>
  );
};

export default Konfirmasi;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1EAE98',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 25,
  },
  txthead: {
    alignContent: 'center',
    flexDirection: 'row',
  },
  titlehead: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 24,
    marginLeft: 61,
  },
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    marginTop: 30,
    paddingTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingLeft: 23,
    paddingRight: 38,
  },
  border: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    marginHorizontal: 30,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 5,
  },
  notes: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginBottom: 17,
  },
});
