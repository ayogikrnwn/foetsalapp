import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {bgfutsal, Toilet, Parkir, Sejuk, IcBack} from '../../assets';
import {ButtonPurple, CardJam} from '../../components';

const BookingPageMalam = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgfutsal} style={styles.bg}>
        <TouchableOpacity>
          <IcBack
            style={styles.icback}
            onPress={() => navigation.navigate('MainApp')}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.page}>
            <Text style={styles.title}>Futbol Sala</Text>
            <Text style={styles.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <View style={styles.border}></View>
            <Text style={styles.title}>Fasilitas</Text>
            <View style={styles.facilities}>
              <Toilet style={styles.ictoilet} />
              <Parkir style={styles.icparkir} />
              <Sejuk />
            </View>
            <View style={styles.border}></View>
            <Text style={styles.title}>Pilih Waktu</Text>
            <View style={styles.cardjam}>
              <CardJam
                label="19.00"
                onPress={() => navigation.navigate('Konfirmasi')}
              />
              <CardJam
                label="20.00"
                onPress={() => navigation.navigate('Konfirmasi')}
              />
              <CardJam
                label="21.00"
                onPress={() => navigation.navigate('Konfirmasi')}
              />
              <CardJam
                label="22.00"
                onPress={() => navigation.navigate('Konfirmasi')}
              />
              <CardJam
                label="23.00"
                onPress={() => navigation.navigate('Konfirmasi')}
              />
              <CardJam
                label="24.00"
                onPress={() => navigation.navigate('Konfirmasi')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BookingPageMalam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: 375,
    height: 375,
    flex: 1,
  },
  icback: {
    marginLeft: 10,
    marginTop: 10,
  },
  content: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -240,
  },
  page: {
    padding: 22,
  },
  btn: {},
  border: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    marginHorizontal: 30,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    marginTop: 10,
  },
  desc: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    marginBottom: 22,
  },
  facilities: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  cardjam: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    flexWrap: 'wrap',
    paddingTop: 10,
  },
});
