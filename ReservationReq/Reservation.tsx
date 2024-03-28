import React, { useState } from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from "react-native-modern-datepicker"
import {getToday,getFormatedDate} from "react-native-modern-datepicker"

const Reservation = ({ navigation }: any) => {

  const today = new Date();
  const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')

  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCVV] = useState('');
  const [open,setOpen] = useState(false)
  const [date,setDate] = useState('2024/03/28')

  
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
  };

 
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOnPress=()=>{
    setOpen(!open);
  };

  const handleChange=(propDate)=>{
    setDate(propDate)


  }
  return (
    
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
        <Image source={require('../assets/arrow.png')} style={styles.headerIcon} />
      </TouchableOpacity>
      <Image
        source={require('../assets/IMG.png')}
        style={styles.logo}
      />

      <TouchableOpacity onPress={() => { /* Handle profile action */ }} style={styles.headerButton}>
        <Image source={require('../assets/Subtract.png')} style={styles.headerIcon} />
      </TouchableOpacity>

      
    </View>

      
      <Text style={styles.title}>Reservation Request</Text>
      <Text style={styles.subtitle}>Reservation Details</Text>

      <TouchableOpacity style={styles.dropdownContainer} onPress={() => toggleModal()}>
        <Image source={require('../assets/ring.png')} style={styles.image} />
        <Text style={styles.dropdownText}>Select Restaurent</Text>
        <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
      </TouchableOpacity>

      
      <View style={styles.row}>
        <TouchableOpacity style={[styles.halfWidth, styles.dropdownContainer]} onPress={handleOnPress}>
          <Image source={require('../assets/date.png')} style={styles.image} />
          <Text style={styles.dropdownText}>Date</Text>
           
          <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>


        <Modal
        animationType='slide'
        transparent={true}
        visible={open}>

          <View style={styles.centeredview}>
            <View style={styles.modalview}>

              <DatePicker
              mode='calender'
              selected={date}
              minimumDate={startDate}
              onDateChanged={handleChange}
              />


            <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <LinearGradient
          colors={['#E6548D', '#F1C365']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.buttonText}>Done</Text>
        </LinearGradient>
      </TouchableOpacity>

            </View>

          </View>
        </Modal>

        
        <TouchableOpacity style={[styles.halfWidth, styles.dropdownContainer]} onPress={() => toggleModal()}>
          <Image source={require('../assets/guests.png')} style={styles.image} />
          <Text style={styles.dropdownText}>Guests</Text>
          
          <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>

      {/* Dropdown for Preferred Time */}
      <TouchableOpacity style={styles.dropdownContainer} onPress={() => toggleModal()}>
        <Image source={require('../assets/ptime.png')} style={styles.image} />
        <Text style={styles.dropdownText}>Preferred Time</Text>
        
        <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.dropdownContainer} onPress={() => toggleModal()}>
        <Image source={require('../assets/bak.png')} style={styles.image} />
        <Text style={styles.dropdownText}>Backup Time</Text>
        <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
      </TouchableOpacity>

      <Text style={styles.maincontent}>Payment Information</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/Vector.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#fff" 
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/cnum.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#fff" 
          value={cardnumber}
          onChangeText={setCardNumber}
        />
      </View>

      <View style={styles.row}>
    {/* Date Text Field */}
    <View style={[styles.halfWidth, styles.dropdownContainer]}>
      <Image source={require('../assets/exp.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Exp: MM/YY"
        placeholderTextColor="#ffffff"
        value={exp}
        onChangeText={setExp}
      />
    </View>

    {/* Guests Text Field */}
    <View style={[styles.halfWidth, styles.dropdownContainer]}>
      <Image source={require('../assets/ccv.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        placeholderTextColor="#ffffff"
        value={cvv}
        onChangeText={setCVV} 
      />
    </View>
  </View>

  <View style={styles.totaltext}>
      <Text style={styles.text}>Total</Text>
      <Text style={styles.text}>$50.00</Text>
    </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          toggleModal();
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{color:"white"}}>Modal Content</Text>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text style={{color:"white"}} >Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button}>
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
    paddingRight: 30,
    paddingLeft:30,
    backgroundColor: '#470D25',
    fontSize:16,
    fontFamily:"IbarraRealNova-Regular"
  
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    marginBottom: 10,
    height:40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '45%',
  },
  dropdownText: {
    fontSize:16,
    color: '#fff',
    marginRight:"auto", 
  },
  dropdownIcon: {
    width: 10,
    height: 10,
    tintColor: '#fff',
  },
  maincontent:{
    fontSize:16,
    color:'#fff',
    textAlign:"center",
    padding:10,
    fontFamily:"IbarraRealNova-Regular"

  },
  button: {
    width: '100%',
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
    fontWeight: "600",
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
    width:"80%",
    color:"white"
  
    
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'transparent',
    color: '#fff', 
    fontSize:16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff', 
    marginBottom: 5,
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
   marginTop:5
   
  },
  text: {
    color: '#FFF', 
    fontSize: 16, 
    
  },
  subtitle: {
    fontSize: 18,
    color: '#fff', 
    textAlign:"center",
    marginBottom:10,
    fontFamily:"IbarraRealNova-Regular"
  },
  title: {
    fontSize: 30,
    color: '#ff69b4', 
    fontWeight: 'bold',
    fontFamily:"IbarraRealNova-Regular",
    textAlign:"center",
    marginBottom:10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {
    marginTop:10,
    marginHorizontal:-20
  },
  headerIcon: {
    width:30,
    height: 24,
  },

  centeredview:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
  },

  modalview:{
    margin:20,
    backgroundColor:"#2D0717",
    width:"85%",
    padding:20,
    alignItems:"center",

  }
});

export default Reservation;
