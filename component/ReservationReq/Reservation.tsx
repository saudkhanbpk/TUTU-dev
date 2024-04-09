import React, {useEffect, useState} from 'react';
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
import {getToday, getFormatedDate} from 'react-native-modern-datepicker';
import DropdownComponent from '../ResturantDropDown/DropDown';
import DateTimePicker from '@react-native-community/datetimepicker';
import ProfileDropdown from '../ProfileDpdown/ProfileDropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Reservation = ({navigation}: any) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const apiUrl = process.env.apiUrl;

  const startDate = getFormatedDate(tomorrow, 'YYYY/MM/DD');

  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');

  const [guests, setGuests] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCVV] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(100);
  const [selectedPreferredTime, setSelectedPreferredTime] = useState(
    new Date(),
  );
  const [selectedBackupTime, setSelectedBackupTime] = useState(new Date());
  const [showPreferredTimePicker, setShowPreferredTimePicker] = useState(false);
  const [showBackupTimePicker, setShowBackupTimePicker] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleReservation = async () => {
    console.log('resturant', selectedOption);
    const userId = await AsyncStorage.getItem('userId');
    const token = await AsyncStorage.getItem('token');
    console.log(userId);
    console.log(token);

    if (!userId || !token) {
      Alert.alert('Error', 'User ID or token not found.');
      return;
    }

    if (
      !selectedOption ||
      !date ||
      !guests ||
      !selectedBackupTime ||
      !selectedPreferredTime ||
      !cardNumber ||
      !fullName ||
      !exp ||
      !cvv
    ) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(
        'https://jittery-tan-millipede.cyclic.app/api/v1/auth/reservation',
        {
          restaurant: selectedOption,
          date: date,
          guests: parseInt(guests),
          preferredTime: selectedPreferredTime,
          backupTime: selectedBackupTime,
          fullName,
          cardNumber: cardNumber,
          expiryDate: exp,
          cvv,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`,
          },
        },
      );

      console.log('response :', response);
      if (response.status === 200) {
        Alert.alert('reserved succesfully');
      } else {
        const errorMessage = response.data.message || 'Something went wrong.';
        Alert.alert('Error', errorMessage);
      }
    } catch (error: any) {
      Alert.alert('Error Reservation:', error);
    }
  };

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

  const updateTotalPrice = (restaurant: string, selectedDate: any) => {
    const dateComponents = selectedDate.split('/');
    const year = parseInt(dateComponents[0]);
    const month = parseInt(dateComponents[1]) - 1;
    const day = parseInt(dateComponents[2]);

    const dateObject = new Date(year, month, day);
    if (isNaN(dateObject.getTime())) {
      setTotalPrice(100);
      return;
    }

    const dayOfWeek = dateObject.getDay();
    console.log('dayOfWeek:', dayOfWeek);
    const restaurantsWithSpecialPrice = [
      'Mastros',
      'STK',
      "Abe & Louie's",
      'Savr',
      'Mariel',
      'Yvonnes',
      'Ruka',
      'Caveau',
      'Grille 23',
    ];
    if (
      (dayOfWeek === 5 || dayOfWeek === 6) &&
      restaurantsWithSpecialPrice.includes(restaurant)
    ) {
      setTotalPrice(125);
    } else {
      setTotalPrice(100);
    }
  };

  useEffect(() => {
    if (selectedOption && date) {
      updateTotalPrice(selectedOption, date);
    }
  }, [selectedOption, date]);

  function handleLogout(): void {
    setIsDropdownVisible(false);
  }

  function handleAccountSettings(): void {
    setIsDropdownVisible(false);
  }

  function handleClose(): void {
    setIsDropdownVisible(false);
  }

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

        <TouchableOpacity>
          <Image
            source={require('../../assets/pngImage.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsDropdownVisible(!isDropdownVisible)}>
          <Image
            source={require('../../assets/Subtract.png')}
            style={styles.headerprof}
          />
          <ProfileDropdown
            // isVisible={isDropdownVisible}
            // onLogout={handleLogout}
            // onAccountSettings={handleAccountSettings}
            // onMyaccount={handleMyaccount}
            // onReservation={handlemyReservation}
            // onPayment={handlePayment}
            // onClose={handleClose}
            isVisible={isDropdownVisible}
            onLogout={handleLogout}
            onAccountSettings={handleAccountSettings}
            onClose={handleClose}
            // onReservation={handlemyReservation }
            // onMyaccount={handleMyaccount}
            // onPayment={handlePayment }
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Reservation Request</Text>
      <Text style={styles.subtitle}>Make your first reservations</Text>

      <DropdownComponent onValueChange={setSelectedOption} />

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.halfWidth, styles.dropdownContainer]}
          onPress={handleOnPress}>
          <Image
            source={require('../../assets/tomorrow2.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.dropdownText}
            value={date.toString()}
            placeholder="Date"
            placeholderTextColor="#F6BED6"
            editable={false}
          />

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
                onDateChange={date => {
                  handleChange(date);
                  setOpen(false); // Close the modal when date is selected
                }}
              />

              {/* <TouchableOpacity
                style={styles.buttonDone}
                onPress={handleOnPress}>
                <LinearGradient
                  colors={['#E6548D', '#F1C365']}
                  style={styles.gradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <Text style={styles.buttonText}>Done</Text>
                </LinearGradient>
              </TouchableOpacity> */}
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={[styles.halfWidth, styles.dropdownContainer]}>
          <Image
            source={require('../../assets/gyest2.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.dropdownText}
            value={guests}
            placeholder="Guest"
            placeholderTextColor="#F6BED6"
            onChangeText={text => {
              const numericValue = text.replace(/[^0-9]/g, '');
              setGuests(numericValue);
            }}
            keyboardType="numeric"
          />

          <Image
            source={require('../../assets/time-left2.png')}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown for Preferred Time */}
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={showPreferredTimePickerModal}>
        <Image
          source={require('../../assets/clock2.png')}
          style={styles.image}
        />
        <Text style={styles.dropdownText}>
          {selectedPreferredTime.toLocaleTimeString()}
        </Text>
        <Image
          source={require('../../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
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

      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={showBackupTimePickerModal}>
        <Image
          source={require('../../assets/time-left2.png')}
          style={styles.image}
        />
        <Text style={styles.dropdownText}>
          {selectedBackupTime.toLocaleTimeString()}
        </Text>
        <Image
          source={require('../../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
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

      <View style={styles.totaltext}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textp}>$ {totalPrice}</Text>
      </View>

      {/* Modal */}

      <TouchableOpacity style={styles.button} onPress={handleReservation}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.buttonText}>Request Reservation</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 40,
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
    width: 20,
    height: 20,
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
    fontWeight: '600',
    fontFamily: 'IbarraRealNova-SemiBold',
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
    marginHorizontal: -20,
  },
  headerButton: {
    marginTop: 10,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerprof: {
    width: 50,
    height: 50,
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
    height: 300,
    backgroundColor: '#2D0717',
    alignItems: 'center',
    position: 'relative',
    top: 105,
    right: 30,
  },
  datePicker: {},
});

export default Reservation;
