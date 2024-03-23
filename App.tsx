import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Validation and sign-up logic here
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    // Proceed with the sign-up process
    Alert.alert('Success', 'Sign-up successful!');
    
    // After successful signup, navigate to SignInScreen or another screen
    // navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/IMG.png')} // Update the path to where your image is located
        style={styles.logo}
      />
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>You are one step away from making 
your first reservation.</Text>

<View style={styles.inputContainer}>
        <Image
          source={require('./assets/Vector.png')} // Update the path to your image icon
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#fff" // Making placeholder text white for visibility
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
      <Image
          source={require('./assets/v2.png')} // Update the path to your image icon
          style={styles.icon}
        />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff" // Making placeholder text white for visibility
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      </View>



      <View style={styles.inputContainer}>
      <Image
          source={require('./assets/v3.png')} // Update the path to your image icon
          style={styles.icon}
        />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        placeholderTextColor="#fff" // Making placeholder text white for visibility
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
       </View>


       <View style={styles.inputContainer}>
      <Image
          source={require('./assets/v4.png')} // Update the path to your image icon
          style={styles.icon}
        />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff" // Making placeholder text white for visibility
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
         </View>

         <View style={styles.inputContainer}>
      <Image
          source={require('./assets/v4.png')} // Update the path to your image icon
          style={styles.icon}
        />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#fff" // Making placeholder text white for visibility
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }} // Horizontal gradient start from left
          end={{ x: 1, y: 0 }}   // Horizontal gradient ends at right
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text style={styles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.txt}>By signing up, I accept the Terms of Service and Community
Guidelines and have read Privacy Policy.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center align contents horizontally
    padding: 30,
    backgroundColor: '#470D25',
  },
  title: {
    fontSize: 30,
    color: '#ff69b4', 
    marginBottom: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff', // White color for the subtitle
    marginBottom: 5,
    textAlign:"center"
  },
  txt:{
    fontSize: 14,
    color: '#fff', // White color for the subtitle
    marginBottom: 10,
    textAlign:"center"

  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
    color: '#fff', 
    fontSize:16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff', // Changing to white for visibility against the background
    marginBottom: 15,
  },
  icon: {
    marginRight: 10, // Adjust the margin as needed
    width: 26, // Adjust the size of the icon as needed
    height: 24, // Adjust the size of the icon as needed
  },
  button: {
    width: '100%', 
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    width: '100%', 
  },
  buttonText: {
    color: '#270614',
    fontSize: 16,
    fontWeight:"600"
  },
  linkText: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
  },
});

export default SignUpScreen;
