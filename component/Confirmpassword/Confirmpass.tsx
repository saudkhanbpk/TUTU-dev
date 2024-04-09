import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Confirmpass = ({navigation}: any) => {
  const [newPassword, setNewPassword] = useState('');
  const [emailID, setEmailID] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigation = useNavigation();
  useEffect(() => {
    const fetchEmail = async () => {
      const email = await AsyncStorage.getItem('userEmail');
      setEmailID(email);
    };

    fetchEmail();
  }, []);

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      return Alert.alert(
        'Error',
        'The passwords do not match. Please try again.',
      );
    }
    if (newPassword?.length < 5) {
      return Alert.alert(
        'Error',
        'please enter valid the password length will be atleat 6.',
      );
    }

    try {
      setLoading(true);

      const response = await axios.post(
        'https://jittery-tan-millipede.cyclic.app/api/v1/auth/resetPassword',
        {
          email: emailID,
          newPassword: confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        Alert.alert('Success', response.data.message || 'successfully updated');
        navigation.navigate('Login');
      } else {
        const errorMessage = response.data.message || 'Something went wrong.';
        Alert.alert('Error', errorMessage);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      const errorMessage = error.response
        ? error.response.data.message
        : 'Something went wrong.';
      Alert.alert('Error', errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Back Button */}
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
          <Text style={styles.title}>Change Password</Text>
          <Text style={styles.subtitle}>
            Enter a different password with the previous
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#F6BED6"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require('../../assets/closed1.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor="#F6BED6"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword2}
          />

          <TouchableOpacity onPress={togglePasswordVisibility2}>
            <Image
              source={require('../../assets/closed1.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleChangePassword}
          disabled={loading}>
          <LinearGradient
            colors={['#E6548D', '#F1C365']}
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
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
    fontFamily: 'IbarraRealNova-Regular',
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
    width: 20,
    height: 20,
  },
  button: {
    width: '100%',
    marginTop: 20,
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
    fontFamily: 'IbarraRealNova-Regular',
  },
  logo: {
    width: 170,
    height: 170,
    alignSelf: 'center',
    marginBottom: 40,
  },
  ascontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  legalTexted: {
    color: '#F6BED6',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
  },
  legalLinked: {
    fontSize: 16,
    color: '#F6BED6',
    textDecorationLine: 'underline',
    fontFamily: 'IbarraRealNova-Regular',
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
  maincontent: {
    marginBottom: 40,
    alignItems: 'center',
  },
});

export default Confirmpass;
