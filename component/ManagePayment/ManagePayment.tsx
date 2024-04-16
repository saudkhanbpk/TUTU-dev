import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ManagePayment = ({navigation}: any) => {
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
          <Text style={styles.headtxt}>Payments</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cardTxt}>Saved Card</Text>
      <View style={styles.cardContainer}>
        <View style={styles.applyFlex}>
        <Text style={styles.cardInformation}>visa ***** 1256  </Text>
        <Image source={require('../../assets/Cross.png')} style={styles.icon2}/>
        </View>
        <Text  style={styles.cardName}>ERIC SULLIVAN</Text>
        <Text style={styles.cardInformation}>Added: on 12/04/2024</Text>
      </View>
      <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/plus.png')}
            style={styles.icon}
          />
          <Text style={styles.input}>Add New</Text>
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
    color: '#F6BED6',
    fontSize: 16,
    marginRight: 'auto',
    marginBottom: 10,
  },
  cardName:{
    marginTop: 10,
    fontFamily: 'IbarraRealNova-SemiBold',
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 'auto',
    marginBottom: 10,
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
});

export default ManagePayment;
