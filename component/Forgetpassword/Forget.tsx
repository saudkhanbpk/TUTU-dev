import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image,SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Forget = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); // Initialize the navigation hook

  const handlePasswordReset = () => {
    // Implement password reset logic here
    Alert.alert('Password Reset', `Password reset link sent to ${email}`, [
      { text: 'OK' },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Use navigation to go back
          style={styles.backButton}>
          <Image
            source={require('../../assets/arrow.png')} // Ensure your image path is correct
            style={styles.backIcon}
          />
          </TouchableOpacity>
    
  
      <Image
        source={require('../../assets/IMG.png')}
        style={styles.logo}
      />

<View style={styles.maincontent}>
<Text style={styles.title}>Forget Password</Text>
      <Text style={styles.subtitle}>Enter your registered email below</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/v2.png')}
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
    navigation.navigate('verification'); 
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
        <Text
          style={styles.legalLinked}
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
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
    padding: 10, // Padding to make it easier to tap
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
    width: 26, 
    height: 24, 
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

