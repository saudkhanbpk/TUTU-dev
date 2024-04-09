import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({ navigation }: any) => {
  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');

  const handleUpdateProfile = () => {
    Alert.alert('Profile Updated', 'Your profile details have been successfully updated.');
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity >
        <Text style={styles.headtxt}>Profile</Text>
      </TouchableOpacity>

  
        <TouchableOpacity >
        <Image source={require('../../assets/Subtract.png')} style={styles.headerprof} />
        
      </TouchableOpacity>
      </View>
      
      <View style={styles.maincontent}>
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/Vector.png')} style={styles.icon} />
        <Text
          style={styles.input}
         
        >Eric Survillan</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/v2.png')} style={styles.icon} />
        <Text
  style={styles.input}
        >sample@gmail.com</Text>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/v3.png')} style={styles.icon} />
        <Text
         style={styles.input} 
      >824-8585-628</Text>
      </View>

      
<View style={{alignItems:"center"}} >
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile} >
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <Text style={styles.buttonText}>Update Changes</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 80,
    backgroundColor: '#470D25',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
  },
 

  input: {
    height: 25,
    backgroundColor: 'transparent',
    color: '#F6BED6',
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
    width: '80%',
    marginTop: 20,

    
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

  
headerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',

},

headerIcon: {
  width: 24,
  height: 24,
},
headerprof: {
  width: 35,
  height: 35,
},
headtxt:{
  fontFamily: 'IbarraRealNova-Regular',
    color: '#E581AB',
    fontSize: 20,
    alignSelf:"center"
},
maincontent:{
  marginTop:20,

}
});


export default Profile;
