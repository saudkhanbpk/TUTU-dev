import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Reservation = ({ navigation }: any) => {
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle dropdown selection
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/IMG.png')}
        style={styles.logo}
      />

      {/* Dropdown for Select Restaurant */}
      <View style={styles.dropdownContainer}>
      <Image
        source={require('../assets/v2.png')}
        
      />
        <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownSelect('Restaurant')}>
          <Text style={styles.dropdownText}>Select Restaurant</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
      </View>

      {/* Dropdowns for Date and Guests */}
      <View style={styles.row}>
        {/* Date Dropdown */}
        <View style={styles.halfWidth}>
          <TouchableOpacity style={styles.dropdownContainer} onPress={() => handleDropdownSelect('Date')}>
            <Text style={styles.dropdownText}>Date</Text>
            <Image
              source={require('../assets/dpicon.png')}
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Guests Dropdown */}
        <View style={styles.halfWidth}>
          <TouchableOpacity style={styles.dropdownContainer} onPress={() => handleDropdownSelect('Guests')}>
            <Text style={styles.dropdownText}>Guests</Text>
            <Image
              source={require('../assets/dpicon.png')}
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown for Preferred Time */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownSelect('Preferred Time')}>
          <Text style={styles.dropdownText}>Preferred Time</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
      </View>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownSelect('Preferred Time')}>
          <Text style={styles.dropdownText}>Backup Time</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
      </View>

      <TouchableOpacity style={styles.button} >
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }}   
        >
          <Text style={styles.buttonText}>Confirm Reservation</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#470D25',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff', 
    marginBottom: 20,
    fontSize:16,
    height:30
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  halfWidth: {
    width: '48%',

  },
  dropdownOption: {
    height:30,
    fontSize:16
  },
  dropdownText: {
    color: '#fff',
  },
  dropdownIcon: {
    width: 10,
    height: 10,
    tintColor: '#fff',
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
  logo: {
    width: 140, 
    height: 140, 
    alignSelf: 'center', 
    marginBottom:20
  },
});

export default Reservation;
