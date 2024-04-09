import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const PaymentMehtod = ({navigation}: any) => {
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCVV] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const handleCardNumberChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setCardNumber(numericValue);
  };
  return (
    <View style={styles.container}>
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
      <Text style={styles.title}>Payment Information</Text>

      <Text style={styles.maincontent}>
        Lets add a payment method for reservations.
      </Text>

      <View style={styles.inputContainer}>
        <Image source={require('../../assets/Card.png')} style={styles.icon} />
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
            source={require('../../assets/tomorrow.png')}
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

        <View style={[styles.halfWidth, styles.dropdownContainer]}>
          <Image
            source={require('../../assets/asteris.png')}
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            placeholderTextColor="#F6BED6"
            keyboardType="numeric"
            maxLength={3}
            value={cvv}
            onChangeText={text => {
              if (/^\d*$/.test(text)) {
                setCVV(text);
              }
            }}
          />
        </View>
      </View>
      <View style={[styles.fullWidth, styles.dropdownContainer]}>
        <Image
          source={require('../../assets/plane.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Country or Region"
          placeholderTextColor="#F6BED6"
          keyboardType="numeric"
          maxLength={3}
          value={country}
          onChangeText={setCountry}
        />
      </View>
      <View style={[styles.fullWidth, styles.dropdownContainer]}>
        <Image source={require('../../assets/mapa.png')} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          placeholderTextColor="#F6BED6"
          keyboardType="numeric"
          maxLength={3}
          value={zipCode}
          onChangeText={setZipCode}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.buttonText}>Save Card & Continue</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
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
  fullWidth: {
    width: '100%',
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
    fontFamily: 'IbarraRealNova-Regular',
    paddingHorizontal: 60,
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
    position: 'relative',
    top: 60,
    right: 30,
  },
  datePicker: {},
});

export default PaymentMehtod;
