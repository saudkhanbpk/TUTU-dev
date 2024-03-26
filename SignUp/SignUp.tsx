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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/IMG.png')} style={styles.logo} />
      <Text style={styles.title}>Let's Get Started</Text>
      <Text style={styles.subtitle}>
        You are one step away from making your first reservation.
      </Text>

      <View style={styles.inputContainer}>
        <Image source={require('../assets/Vector.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#F6BED6"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../assets/v2.png')} style={styles.icon} />
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
        <Image source={require('../assets/v3.png')} style={styles.icon} />
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
        <Image source={require('../assets/v4.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#F6BED6"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../assets/v4.png')} style={styles.icon} />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#F6BED6"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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
      <Text onPress={() => console.log("Privacy Policy pressed")} style={styles.legalLink}> Privacy Policy</Text>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 16,
    width: 269,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
    marginBottom: 20,
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
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
    width: 26,
    height: 24,
  },
  button: {
    width: '100%',
    marginTop: 5,
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#270614',
    fontSize: 16,
    fontWeight: '600',
  },
  // linkText: {
  //   marginTop: 10,
  //   color: '#fff',
  //   textAlign: 'center',
  // },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
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

export default SignUp;
