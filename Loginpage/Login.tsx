import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Validation and sign-in logic here
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    // Proceed with the sign-in process
    Alert.alert('Success', 'Sign-in successful!');
    
    // After successful sign-in, navigate to another screen
    // navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/IMG.png')}
        style={styles.logo}
      />


      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/v2.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/v4.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.linkText}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }}   
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.txt}>By signing in, I accept the Terms of Service and Community Guidelines and have read Privacy Policy.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 30,
    backgroundColor: '#470D25',
  },
 
  txt: {
    fontSize: 14,
    color: '#fff', 
    marginTop: 40,
    textAlign: "center"
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
    color: '#fff', 
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff', 
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
  },
  linkText: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 170, 
    height: 170, 
    alignSelf: 'center', 
    marginBottom:20
  },
});

export default SignIn;
