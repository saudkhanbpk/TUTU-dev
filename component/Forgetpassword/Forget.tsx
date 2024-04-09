import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image,SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Forget = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  const [isSigningUp, setIsSigningUp] = useState(false);
  const handlePasswordReset = async () => {
    try {
      const response = await axios.post('https://jittery-tan-millipede.cyclic.app/api/v1/auth/sendOtp',
      JSON.stringify({
        email,
      
      }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const responseData = response.data;
        console.log(response)
        await AsyncStorage.setItem('userEmail', email);
        Alert.alert('Success', responseData.message || 'send email succesfull!');
        navigation.navigate('verification');
      } else {
        const errorMessage = response.data.message || 'Something went wrong.';
        Alert.alert('Error', errorMessage);
      }
    } catch (error:any) {
     
   
      const errorMessage = error.response ? error.response.data.message : 'Something went wrong.';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsSigningUp(false);
    }
  
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()} 
          style={styles.backButton}>
          <Image
            source={require('../../assets/arrow.png')} 
            style={styles.backIcon}
          />
          </TouchableOpacity>  
      <Image
        source={require('../../assets/pngImage.png')}
        style={styles.logo}
      />

<View style={styles.maincontent}>
<Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>Enter your registered email below</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Vector2.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#F6BED6"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      
      <TouchableOpacity
  style={styles.button}
  onPress={() => {
    handlePasswordReset();
     
  }}>
  <LinearGradient
    colors={['#E6548D', '#F1C365']}
    style={styles.gradient}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}>
    <Text style={styles.buttonText}>Submit</Text>
  </LinearGradient>
</TouchableOpacity>
      <View style={styles.ascontainer}>
        <Text style={styles.legalTexted}>Remember the password? </Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        >

        <Text
          style={styles.legalLinked}
          >
          Sign In
        </Text>
        </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#470D25',
  },
  backButton: {
    position: 'absolute',
    top: 10, 
    left: 10, 
    padding: 10, 
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
      height: 40,
      backgroundColor: 'transparent',
      color: '#fff', 
      fontSize: 16,
      fontFamily:"IbarraRealNova-Regular",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)', 
    marginBottom: 30,
  },
  icon: {
    marginRight: 10, 
    width: 20, 
    height: 20, 
  },
  button: {
    width: '100%', 
    marginTop: 10
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    width: '100%', 
  },
  buttonText: {
    color: '#270614',
    fontSize: 16,
    fontWeight: "600",
    fontFamily:"IbarraRealNova-Regular",
  },
  logo: {
    width: 170, 
    height: 170, 
    alignSelf: 'center', 
    marginBottom:40
  },
  ascontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

 
  legalTexted: {
    color: '#F6BED6',
    fontSize: 16, 
    fontFamily:"IbarraRealNova-Regular",
   
  },
  legalLinked: {
    fontSize: 16, 
    color: '#F6BED6',
    textDecorationLine: 'underline', 
    fontFamily:"IbarraRealNova-Regular",
  },

headerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
headerButton: {
  marginTop: 10,
  marginHorizontal: -20,
},
headerIcon: {
  width: 24,
  height: 24,
},
subtitle: {
  fontSize: 16,
  color: '#fff',
  fontFamily: 'IbarraRealNova-Regular',
},
title: {
  fontSize: 30,
  color: '#E581AB',
  fontFamily: 'IbarraRealNova-Regular',
  marginBottom: 5,
},
maincontent:{
  marginBottom:40,
}
});

export default Forget;

