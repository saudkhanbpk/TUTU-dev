
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Reservation from './component/ReservationReq/Reservation'
import SignUp from './component/SignUp/SignUp';
import Login from './component/Loginpage/Login'
import { enableScreens } from 'react-native-screens';
import Privacy from './component/privacyPage/Privacy';

enableScreens();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>    
    <NavigationContainer>
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Login" component={Login} />  
    <Stack.Screen name="Signup" component={SignUp} />
    <Stack.Screen name="reservation" component={Reservation} /> 
    <Stack.Screen name="privacy" component={Privacy} />
  </Stack.Navigator>
</NavigationContainer>
    </>

  );
};

export default App;

