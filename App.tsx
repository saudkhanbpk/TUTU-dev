
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reservation from './ReservationReq/Reservation';
import SignUp from './SignUp/SignUp';
import Login from './Loginpage/Login'
import { enableScreens } from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
         {/* <Stack.Screen name="Login" component={Login} />  */}
        {/* <Stack.Screen name="Signup" component={SignUp} /> */}
        <Stack.Screen name="reservation" component={Reservation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

