import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ReservationRequest = ({navigation}: any) => {
  return (
    <View style={styles.containerFluid}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.headtxt}>Reservation Requests</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cardTxt}>12/04/2024</Text>
      <View style={styles.cardContainer}>
        <View style={styles.applyFlex}>
        <Text style={styles.cardName}>Eric Sullivan </Text>
        <Text style={styles.cardNames}>Guest:4</Text>
        <Image source={require('../../assets/Cross.png')} style={styles.icon2}/>
        </View>
        <Text  style={styles.cardName}>Resturant Name</Text>
        <Text style={styles.cardInformation}>$50.00</Text>
        <Text  style={styles.cardNameee}>Preferred Time: 2:30 PM </Text>
        <Text  style={styles.cardNameee}>Backup Time: 3:00 PM</Text>
        <View style={styles.applyFlex}>
        <Text style= {styles.paymentVerified}><Image source={require('../../assets/Verified.png')} style={styles.icon3}/>  Payment Verified</Text>
        <TouchableOpacity>
          <Text style={styles.headtxt}>Approved</Text>
        </TouchableOpacity>
        </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  containerFluid: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#470D25',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
  },
  cardContainer: {
    backgroundColor: '#310D1D',
    borderRadius:10,
    padding:20,
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 80,
    marginBottom: 20,
  },
  applyFlex: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  headerIcon: {
    marginTop: 10,
    width: 24,
    height: 24,
  },
  headerprof: {
    width: 50,
    height: 50,
  },
  headtxt: {
    marginTop: 10,
    fontFamily: 'IbarraRealNova-Regular',
    color: '#E581AB',
    fontSize: 20,
    alignSelf: 'center',
  },
  cardTxt: {
    marginTop: 10,
    fontFamily: 'IbarraRealNova-Regular',
    color: '#BF879F',
    fontSize: 14,
    marginRight: 'auto',
    marginBottom: 10,
  },
  cardInformation: {
    marginTop: 10,
    fontFamily: 'IbarraRealNova-SemiBold',
    color: '#E581AB',
    fontSize: 16,
    marginRight: 'auto',
    marginBottom: 10,
  },
  cardName:{
   
    fontFamily: 'IbarraRealNova-SemiBold',
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 'auto',
    
  },
  cardNameee:{
   marginTop:2,
    fontFamily: 'IbarraRealNova-Regular',
    color: '#FFFFFF',
    fontSize: 14,
    marginRight: 'auto',
   
  },
  cardNames:{
  
    fontFamily: 'IbarraRealNova-Regular',
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 'auto',
    
  },
  icon: {
     
    width: 20,
    height: 20,  
  },
  icon2: {
    marginTop:4,  
    width: 20,
    height: 20,  
  },
  icon3: {
     
    width: 15,
    height:15,
      
  },
  input: {
    height: 25,
    backgroundColor: 'transparent',
    color: '#F6BED6',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
    marginTop:5
  },
  inputContainer: {
    gap:10,
    marginTop:30,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 30,
    paddingBottom:10
  },
  paymentVerified:{
    marginTop:20,
  color:'#A0E8C5',
  fontFamily: 'IbarraRealNova-Regular',
  fontSize: 16,
  },
});

export default ReservationRequest;
