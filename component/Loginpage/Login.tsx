import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignIn = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State variable to track password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the state to show/hide password
  };


  const handleSignIn = async () => {

    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
 
    try {
    
      const response = await fetch('http://10.0.2.2:4000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          password,
        }),
      });
  
   
      if (response.ok) {
        Alert.alert('Success', 'Sign-in successful!');
      
        navigation.navigate('reservation');
      } else {
        
        const errorMessage = await response.text();
        Alert.alert('Error', errorMessage || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
    
    // After successful sign-in, navigate to another screen
    // navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/IMG.png')}
        style={styles.logo}
      />


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

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/v4.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#F6BED6" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}

        />
         <TouchableOpacity onPress={togglePasswordVisibility}>
        <Image  source={require('../../assets/hidden.png')} style={styles.icon} />
        </TouchableOpacity>
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
      <View style={styles.ascontainer}>
        <Text style={styles.legalTexted}>Don't have an account? </Text>
        <Text
          style={styles.legalLinked}
          onPress={() => navigation.navigate('Signup')}>
          Sign up
        </Text>
      </View>

      <View style={styles.legalLinks}> 
      <Text style={styles.legalText}>By signing in, I accept the </Text>
      <Text onPress={() => console.log("Terms of Service pressed")} style={styles.legalLink}>Terms of Service</Text>
      <Text style={styles.legalText}> and </Text>
      <Text onPress={() => console.log("Community Guidelines pressed")} style={styles.legalLink}>Community Guidelines</Text>
      <Text style={styles.legalText}> and have read the </Text>
      <Text onPress={() => navigation.navigate('privacy')} style={styles.legalLink}> Privacy Policy</Text>
    </View>
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
  },
  linkText: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#F6BED6',
    fontSize:18
  },
  logo: {
    width: 170, 
    height: 170, 
    alignSelf: 'center', 
    marginBottom:20
  },

  ascontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  legalLinks: {
    flexDirection: 'row',
    width:355,
    alignItems: 'start',
    flexWrap: 'wrap', // Allow legal links to wrap if needed
    marginTop: 50, // Add some margin for better separation
    textAlign: 'start', // Centers the text within its container
  },
  legalText: {
    color: '#F6BED6',
    fontSize: 14, // Adjust font size as needed
    flexWrap: 'wrap', // Allow text to wrap within the component
  },
  legalLink: {
    fontSize: 14, // Adjust font size as needed
    color: 'white',
    
    flexWrap: 'wrap', // Allow text to wrap within the component
  },
  wordBreak: {
    flexWrap: 'wrap', // Allow text to wrap within the component
  },
  legalTexted: {
    color: '#F6BED6',
    fontSize: 16, // Adjust font size as needed
    // Adjust color as needed
  },
  legalLinked: {
    fontSize: 16, // Adjust font size as needed
    color: '#F6BED6',
    textDecorationLine: 'underline', // Add underline for clarity
  },
});

export default SignIn;
