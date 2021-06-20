import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {blogone, blogtwo} from '../../assets';
import {Header, Kompetisi, CardBooking} from '../../components';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.navigate('LiveScore')} />
        <View style={styles.content}>
          <Text style={styles.txtkompetisi}>Kompetisi</Text>
          <View style={styles.sview}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Kompetisi img={blogone} />
              <Kompetisi img={blogtwo} />
            </ScrollView>
            <Text style={styles.txtkompetisi}>Main Sekarang</Text>
            <View style={styles.booking}>
              <CardBooking
                title="Jadwal Siang"
                time="10.00 - 17.00 "
                harga="Rp. 80.000"
                onPress={() => navigation.navigate('BookingPage')}
              />
              <CardBooking
                title="Jadwal Malam"
                time="19.00 - 23.00"
                harga="Rp. 90.000"
                onPress={() => navigation.navigate('BookingPageMalam')}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1EAE98',
    flex: 1,
  },

  content: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    marginTop: 30,
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sview: {},
  txtkompetisi: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  booking: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
});
