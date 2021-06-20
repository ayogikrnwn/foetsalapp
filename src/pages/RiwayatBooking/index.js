import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, CardHistoryBook} from '../../components';

const RiwayatBooking = () => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Riwayat Booking</Text>
        <Text style={styles.desc}>20-06-2021</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.history}>
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
            <CardHistoryBook />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RiwayatBooking;

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
  title: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
  },
  desc: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    textAlign: 'center',
  },
  history: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
