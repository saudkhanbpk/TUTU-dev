import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = ({navigation}: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };


  const handleSignUp = async () => {
    
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
  
  //   try {

  //     const response = await fetch('https://tutu-backend.onrender.com/api/v1/auth/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         fullName,
  //         email,
  //         phone,
  //         password,
  //       }),
  //     });
  
  //     if (response.ok) {
  //       Alert.alert('Success', 'Sign-up successful!');
       
  //       navigation.navigate('reservation');
  //     } else {
       
  //       const errorMessage = await response.text();
  //       Alert.alert('Error', errorMessage || 'Something went wrong.');
  //     }
  //   } catch (error) {
  //     console.error('Error signing up:', error);
  //     Alert.alert('Error', 'Something went wrong. Please try again later.');
  //   }
   };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/IMG.png')} style={styles.logo} />
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>
        You are one step away from making your first reservation.
      </Text>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/Vector.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#F6BED6"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/v2.png')} style={styles.icon} />
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
        <Image source={require('../../assets/v3.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#F6BED6"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/v4.png')} style={styles.icon} />
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

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/v4.png')} style={styles.icon} />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#F6BED6"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
        <Image  source={require('../../assets/hidden.png')} style={styles.icon} />
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('reservation')}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </LinearGradient>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => navigation.navigate('reservation')}>
        <Text style={styles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity> */}
      <View style={styles.ascontainer}>
        <Text style={styles.legalTexted}>Already have an account? </Text>
        <Text
          style={styles.legalLinked}
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </View>

      <View style={styles.legalLinks}> 
      <Text style={styles.legalText}>By signing in, I accept the </Text>
      <Text onPress={() => console.log("Terms of Service pressed")} style={styles.legalLink}>Terms of Service</Text>
      <Text style={styles.legalText}> and </Text>
      <Text onPress={() => console.log("Community Guidelines pressed")} style={styles.legalLink}>Community Guidelines</Text>
      <Text style={styles.legalText}> and have read the </Text>
      <Text onPress= {() => navigation.navigate('privacy')} style={styles.legalLink}> Privacy Policy</Text>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#470D25',
  },
  title: {
    fontSize: 30,
    color: '#E581AB',
    marginBottom: 5,
    fontWeight: 'normal',
    fontFamily: 'IbarraRealNova-Regular',
  },
  subtitle: {
    fontSize: 16,
    width: 269,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'normal',
    fontFamily: 'IbarraRealNova-Regular',
  },
  txt: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 18,
 
  },
  icon: {
    marginRight: 10,
    width: 26,
    height: 24,
  },
  button: {
    width: '100%',
    marginTop: 10,
    
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontFamily: 'IbarraRealNova-Regular',
    color: '#270614',
    fontSize: 16,
    fontWeight: '600',
  },

  logo: {
    width: 140,
    height: 140,
    alignSelf: 'center',
  },
  ascontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  legalLinks: {
    width:360,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    fontFamily: 'IbarraRealNova-Regular',
  },
  legalText: {
    fontFamily: 'IbarraRealNova-Regular',
    color: '#F6BED6',
    fontSize: 14, 
    textAlign: 'center',
  },
  legalLink: {
    fontFamily: 'IbarraRealNova-Regular',
    fontSize: 14, 
    color: 'white',
    textAlign: 'center',
  
  },

  legalTexted: {
    fontFamily: 'IbarraRealNova-Regular',
    color: '#F6BED6',
    fontSize: 16, 
    
  },
  legalLinked: {
    fontFamily: 'IbarraRealNova-Regular',
    fontSize: 16, 
    color: '#F6BED6',
   
  },
});

export default SignUp;
