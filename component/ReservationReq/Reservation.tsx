import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';
import DropdownComponent from '../ResturantDropDown/DropDown';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import ProfileDropdown from '../ProfileDpdown/ProfileDropdown';


const Reservation = ({ navigation }: any) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const startDate = getFormatedDate(tomorrow, 'YYYY/MM/DD');

  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');

  const [guests, setGuests] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCVV] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');

  const [selectedPreferredTime, setSelectedPreferredTime] = useState(new Date());
  const [selectedBackupTime, setSelectedBackupTime] = useState(new Date());
  const [showPreferredTimePicker, setShowPreferredTimePicker] = useState(false);
  const [showBackupTimePicker, setShowBackupTimePicker] = useState(false);
   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
   

  const handlePreferredTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || selectedPreferredTime;
    setShowPreferredTimePicker(false);
    setSelectedPreferredTime(currentTime);
  };

  const handleBackupTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || selectedBackupTime;
    setShowBackupTimePicker(false);
    setSelectedBackupTime(currentTime);
  };

  const showPreferredTimePickerModal = () => {
    setShowPreferredTimePicker(true);
  };

  const showBackupTimePickerModal = () => {
    setShowBackupTimePicker(true);
  };

  const [cardNumber, setCardNumber] = useState('');

  const handleCardNumberChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setCardNumber(numericValue);
  };


  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOnPress = () => {
    setOpen(!open);
  };

  const handleChange = (propDate: any) => {
    setDate(propDate);
  };

  const handleReservation = () => {
    if (!date || !guests || !selectedBackupTime || !selectedPreferredTime || !cardNumber
      || !fullName || !exp || !cvv!) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
  }

  const handleLogout = () => {
    setIsDropdownVisible(false); 
  };
  const handleClose = () => {
    setIsDropdownVisible(false);
  };

  const handleAccountSettings = () => {
    console.log('Navigating to account settings');
    setIsDropdownVisible(false); 
  };
  const handleMyaccount= () => {
    
    setIsDropdownVisible(false); 
  };
  const handlemyReservation = () => {
   
    setIsDropdownVisible(false); 
  };
  const handlePayment = () => {
    
    setIsDropdownVisible(false); 
  };







  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButton}>
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.headerIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity >
        <Image source={require('../../assets/IMG.png')} style={styles.logo} />
      </TouchableOpacity>

  
        <TouchableOpacity onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
        <Image source={require('../../assets/Subtract.png')} style={styles.headerprof} />
        <ProfileDropdown
          isVisible={isDropdownVisible}
          onLogout={handleLogout}
          onAccountSettings={handleAccountSettings}
          onMyaccount={handleMyaccount}
          onReservation={handlemyReservation}
          onPayment={handlePayment}
          onClose={handleClose}
        />
      </TouchableOpacity>
      </View>

      <Text style={styles.title}>Reservation Request</Text>
      <Text style={styles.subtitle}>Reservation Details</Text>



      <DropdownComponent />

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.halfWidth, styles.dropdownContainer]}
          onPress={handleOnPress}>
          <Image
            source={require('../../assets/date.png')}
            style={styles.image}
          />
          <TextInput style={styles.dropdownText} value={date.toString()} placeholder='Date' placeholderTextColor="#F6BED6"  editable={false}/>

          <Image
            source={require('../../assets/dpicon.png')}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>

        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={styles.centeredview}>
            <View style={styles.modalview}>
              <DatePicker
                style={styles.datePicker}
                mode="calendar"
                selected={date}
                minimumDate={startDate}
                onDateChange={handleChange}
              />

              <TouchableOpacity
                style={styles.buttonDone}
                onPress={handleOnPress}>
                <LinearGradient
                  colors={['#E6548D', '#F1C365']}
                  style={styles.gradient}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}>
                  <Text style={styles.buttonText}>Done</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          style={[styles.halfWidth, styles.dropdownContainer]}
        >
          <Image
            source={require('../../assets/guests.png')}
            style={styles.image}
          />
          <TextInput style={styles.dropdownText} value={guests}
            placeholder='Guest'
            placeholderTextColor="#F6BED6"
            onChangeText={text => {
              // Use regular expression to remove non-numeric characters
              const numericValue = text.replace(/[^0-9]/g, '');
              // Set the state with the numeric value
              setGuests(numericValue);
            }}
            keyboardType="numeric"

          />

          <Image
            source={require('../../assets/dpicon.png')}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown for Preferred Time */}
      <TouchableOpacity style={styles.dropdownContainer} onPress={showPreferredTimePickerModal}>
        <Image source={require('../../assets/ptime.png')} style={styles.image} />
        <Text style={styles.dropdownText}>{selectedPreferredTime.toLocaleTimeString()}</Text>
        <Image source={require('../../assets/dpicon.png')} style={styles.dropdownIcon} />
      </TouchableOpacity>

      {showPreferredTimePicker && (
        <DateTimePicker
          testID="preferredTimePicker"
          value={selectedPreferredTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handlePreferredTimeChange}
        />
      )}

      <TouchableOpacity style={styles.dropdownContainer} onPress={showBackupTimePickerModal}>
        <Image source={require('../../assets/bak.png')} style={styles.image} />
        <Text style={styles.dropdownText}>{selectedBackupTime.toLocaleTimeString()}</Text>
        <Image source={require('../../assets/dpicon.png')} style={styles.dropdownIcon} />
      </TouchableOpacity>

      {showBackupTimePicker && (
        <DateTimePicker
          testID="backupTimePicker"
          value={selectedBackupTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleBackupTimeChange}
        />
      )}

      <Text style={styles.maincontent}>Payment Information</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/Vector.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#F6BED6"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../../assets/cnum.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#F6BED6"
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          keyboardType="numeric"
          maxLength={16}
        />
      </View>

      <View style={styles.row}>
        
        
        <View style={[styles.halfWidth, styles.dropdownContainer]}>
          <Image
            source={require('../../assets/exp.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="Exp: MM/YY"
            placeholderTextColor="#F6BED6"
            value={exp}
            onChangeText={setExp}
          />
        </View>

        {/* Guests Text Field */}
        <View style={[styles.halfWidth, styles.dropdownContainer]}>
          <Image
            source={require('../../assets/ccv.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            placeholderTextColor="#F6BED6"
            keyboardType="numeric"
            maxLength={3}
            value={cvv}
            onChangeText={(text) => {

              if (/^\d*$/.test(text)) {
                setCVV(text);
              }
            }}
          />
        </View>
      </View>

      <View style={styles.totaltext}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textp}>$50.00</Text>
      </View>

      {/* Modal */}


      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={styles.buttonText}>
            Confirm Reservation
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#470D25',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 15,
    height: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '45%',
  },
  dropdownText: {
    fontSize: 16,
    color: '#F6BED6',
    marginRight: 'auto',
    fontFamily: 'IbarraRealNova-Regular',
  },

  dropdownIcon: {
    width: 12,
    height: 12,
    tintColor: '#AA617F',
  },
  maincontent: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    padding: 20,
    fontFamily: 'IbarraRealNova-Regular',
  },
  button: {
    width: '100%',
    marginTop: 30,
  },
  buttonDone: {
    width: '70%',
    marginTop: 10,
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
    width: 140,
    height: 140,
    alignSelf: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#2D0717',
    padding: 20,
    width: '80%',
    color: 'white',
  },
  input: {
    flex: 1,
    height: 40,
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
    marginBottom: 15,
  },
  icon: {
    marginRight: 12,
    width: 26,
    height: 24,
  },
  totaltext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  text: {
    color: '#F6BED6',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
  },
  textp: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'IbarraRealNova-Regular',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'IbarraRealNova-Regular',
  },
  title: {
    fontSize: 30,
    color: '#E581AB',
    fontFamily: 'IbarraRealNova-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:-20
  },
  headerButton: {
    marginTop: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerprof: {
    width: 35,
    height: 35,
  },
  centeredview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  modalview: {
    color: 'white',
    width: 271,
    height: 370,
    backgroundColor: '#2D0717',
    alignItems: 'center',
    position:"relative",
    top:60
  },
  datePicker: {},
  

 

});

export default Reservation;
