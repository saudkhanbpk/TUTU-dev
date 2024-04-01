import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-modern-datepicker';
import {getToday, getFormatedDate} from 'react-native-modern-datepicker';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';


const Reservation = ({navigation}: any) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const startDate = getFormatedDate(tomorrow, 'YYYY/MM/DD');

  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPreferredTime, setSelectedPreferredTime] = useState(new Date());
  const [selectedBackupTime, setSelectedBackupTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCVV] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [openPreferredTime, setOpenPreferredTime] = useState(false);
  const [openBackupTime, setOpenBackupTime] = useState(false);

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

  // const handleTimePressPreferred = () => {
  //   const options = {
  //     mode: 'time',
  //     date: selectedPreferredTime,
  //     is24Hour: false, // Adjust for 24-hour format if needed
  //   };
  //   DateTimePickerModal(options, (result) => {
  //     if (result.action !== 'dismissedAction') {
  //       setSelectedPreferredTime(result.date);
  //     }
  //   });
  // };

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
        <Image source={require('../../assets/IMG.png')} style={styles.logo} />

        <TouchableOpacity
          onPress={() => {
            /* Handle profile action */
          }}
          style={styles.headerButton}>
          <Image
            source={require('../../assets/Subtract.png')}
            style={styles.headerprof}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Reservation Request</Text>
      <Text style={styles.subtitle}>Reservation Details</Text>

      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={() => toggleModal()}>
        <Image source={require('../../assets/ring.png')} style={styles.image} />
        <Text style={styles.dropdownText}>Select Restaurent</Text>
        <Image
          source={require('../../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.halfWidth, styles.dropdownContainer]}
          onPress={handleOnPress}>
          <Image
            source={require('../../assets/date.png')}
            style={styles.image}
          />
          <Text style={styles.dropdownText}>Date</Text>

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
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
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
          <Text style={styles.dropdownText}>Guests</Text>

          <Image
            source={require('../../assets/dpicon.png')}
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Dropdown for Preferred Time */}
      <TouchableOpacity
        style={styles.dropdownContainer}
        >
        <Image
          source={require('../../assets/ptime.png')}
          style={styles.image}
        />
        <Text style={styles.dropdownText}>Preferred Time</Text>

        <Image
          source={require('../../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.dropdownContainer}
        >
        <Image source={require('../../assets/bak.png')} style={styles.image} />
        <Text style={styles.dropdownText}>Backup Time</Text>
        <Image
          source={require('../../assets/dpicon.png')}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>

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
          value={cardnumber}
          onChangeText={setCardNumber}
        />
      </View>

      <View style={styles.row}>
        {/* Date Text Field */}
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
            value={cvv}
            onChangeText={setCVV}
          />
        </View>
      </View>

      <View style={styles.totaltext}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textp}>$50.00</Text>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          toggleModal();
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              style={{color: '#F6BED6', fontFamily: 'IbarraRealNova-Regular'}}>
              Culinary Canvas Café{' '}
            </Text>
            <Text
              style={{color: '#F6BED6', fontFamily: 'IbarraRealNova-Regular'}}>
              RusticRoots Kitchen.{' '}
            </Text>
            <Text
              style={{color: '#F6BED6', fontFamily: 'IbarraRealNova-Regular'}}>
              Culinary Canvas Café{' '}
            </Text>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={{color: '#F6BED6'}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
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
    flex: 1,
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
    marginBottom: 12,
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
    width: 10,
    height: 10,
    tintColor: '#fff',
  },
  maincontent: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    fontFamily: 'IbarraRealNova-Regular',
  },
  button: {
    width: '100%',
    marginTop: 20,
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
    width: 120,
    height: 120,
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
    marginBottom: 12,
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
    marginTop: 5,
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
    marginBottom: 10,
    fontFamily: 'IbarraRealNova-Regular',
  },
  title: {
    fontSize: 30,
    color: '#E581AB',
    fontFamily: 'IbarraRealNova-Bold',
    textAlign: 'center',
    marginBottom: 10,
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
  headerprof: {
    width: 35,
    height: 35,
  },
  centeredview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  modalview: {
    color: 'white',
    width: 271,
    height: 370,
    backgroundColor: '#2D0717',
    alignItems: 'center',
  },
  datePicker: {},
});

export default Reservation;
