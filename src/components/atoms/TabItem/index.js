import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  HomeSelected,
  HomeUnselected,
  ProfileSelected,
  ProfileUnselected,
  RiwayatSelected,
  RiwayatUnselected,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title == 'Home') {
      return active ? <HomeSelected /> : <HomeUnselected />;
    }
    if (title == 'Riwayat') {
      return active ? <RiwayatSelected /> : <RiwayatUnselected />;
    }
    if (title == 'Profile') {
      return active ? <ProfileSelected /> : <ProfileUnselected />;
    }
    return active ? <HomeSelected /> : <HomeUnselected />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 10,
    color: active ? '#312651' : '#B5B5B5',

    marginTop: 4,
  }),
});
