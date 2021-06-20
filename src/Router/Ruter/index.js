import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomNavigator } from '../../components';
import {
  BerhasilBooking, BookingPage, BookingPageMalam, Home, Konfirmasi, LiveScore, Login, Profile, Register, RiwayatBooking, Splash
} from '../../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Riwayat" component={RiwayatBooking} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Ruter = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BookingPage"
        component={BookingPage}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="BookingPageMalam"
        component={BookingPageMalam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Konfirmasi"
        component={Konfirmasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BerhasilBooking"
        component={BerhasilBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LiveScore"
        component={LiveScore}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  );
};

export default Ruter;
