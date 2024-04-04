import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image,SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation


const Verify = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation(); 

  const handleSubmit = () => {
    
    console.log('Submitted Code:', code);
    
  };
  const handleResend = () => {
    // Handle resend action here
  };

  const handleContactSupport = () => {
    // Handle contact support action here
  };

  return (
    <SafeAreaView style={styles.container}>
     <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>

      <Image
        source={require('../../assets/IMG.png')}
        style={styles.logo}
      />

<View style={styles.maincontent}>
<Text style={styles.title}>Forgot Password</Text>
<Text style={styles.subtitle}>Password recovery email sent
to sa****@gmail.com</Text>
      </View>

      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setCode}
        value={code}
        keyboardType="number-pad"
        maxLength={4} 
        autoFocus={true}
        placeholder='Enter Code'
        placeholderTextColor="#F6BED6"
        
      />
</View>

<View style={styles.seccont}>
<View style={styles.verifycode}>
  <Image  source={require('../../assets/succ.png')} />
  <Text style={styles.vertext}>Success!</Text>
</View>

<View style={styles.resend}>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.vertext}>Didn't receive email? <Text style={styles.resendLink}>Resend</Text></Text>
        </TouchableOpacity>
      </View>
      </View>


<TouchableOpacity style={styles.button}  
onPress={() => {
    handleSubmit();
    navigation.navigate('confirmpass'); 
  }}>
          <LinearGradient
            colors={['#E6548D', '#F1C365']}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.contactsup}>
        <TouchableOpacity onPress={handleContactSupport}>
          <Text style={styles.vertext}>Still not working? <Text style={styles.link}>Contact Support</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
          color: 'white', 
          fontSize: 20,
          fontFamily:"IbarraRealNova-Regular",
      },
      inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)', 
        marginBottom: 10,
      },
      icon: {
        marginRight: 10, 
        width: 26, 
        height: 24, 
      },
      button: {
        width: '100%', 
        marginTop: 20
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
        marginBottom:20
      },
      subtitle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'IbarraRealNova-Regular',
        textAlign:"center"
        
      },
      title: {
        fontSize: 30,
        color: '#E581AB',
        fontFamily: 'IbarraRealNova-Regular',
        marginBottom: 5,
      },
      maincontent:{
        marginBottom:40,
        alignItems:"center"
      },
      verifycode:{
        flexDirection:"row",
        alignItems:"center",
      },
      vertext:{
        color: '#E581AB',
        fontFamily: 'IbarraRealNova-Regular',
        marginLeft:10,
        fontSize:16
        
      },
      foottext:{
        flexDirection:"row",
        color: '#E581AB',
        fontFamily: 'IbarraRealNova-Regular',
      
      },
      resend:{
        marginTop:20,
        alignItems:"flex-start"
      },
      contactsup:{
        marginTop:40,
        width:170,
        alignItems:"center",
        alignSelf:"center"
        
      },
      resendLink: {
        textDecorationLine: 'underline',
        
      },
      link: {
        textDecorationLine: 'underline',
      
      },
      seccont:{
        alignItems: 'flex-start',
        marginTop:10
        
      }
 
});

export default Verify;
