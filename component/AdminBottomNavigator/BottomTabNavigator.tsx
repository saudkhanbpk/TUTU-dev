// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Reservation from '../ReservationReq/Reservation';
import Reservations from '../ReservationsHistory/ReservationsHistory';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ReservationRequest') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Reservations') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Reservation" component={Reservation} options={{ title: 'Request' }} />
        <Tab.Screen name="Reservationhistory" component={Reservations} options={{ title: 'Reservations' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
