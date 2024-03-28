// import React, { useState } from 'react';
// import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Reservation = ({ navigation }: any) => {
//   const [selectedOption, setSelectedOption] = useState('');

//   // Function to handle dropdown selection
//   const handleDropdownSelect = (option: string) => {
//     setSelectedOption(option);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/IMG.png')}
//         style={styles.logo}
//       />

//       {/* Dropdown for Select Restaurant */}
//       <View style={styles.dropdownContainer}>
//       <Image
//         source={require('../assets/ring.png')}
        
//       />
//         <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownSelect('Restaurant')}>
//           <Text style={styles.dropdownText}>Select Restaurant</Text>
//         </TouchableOpacity>
//         <Image
//           source={require('../assets/dpicon.png')}
//           style={styles.dropdownIcon}
//         />
//       </View>

//       {/* Dropdowns for Date and Guests */}
//       <View style={styles.row}>
//       <Image
//         source={require('../assets/date.png')}
        
//       />
//         <View style={styles.halfWidth}>
//           <TouchableOpacity style={styles.dropdownContainer} onPress={() => handleDropdownSelect('Date')}>
//             <Text style={styles.dropdownText}>Date</Text>
//             <Image
//               source={require('../assets/dpicon.png')}
//               style={styles.dropdownIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Guests Dropdown */}
//         <View style={styles.halfWidth}>
//         <Image
//         source={require('../assets/guests.png')}
        
//       />
//           <TouchableOpacity style={styles.dropdownContainer} onPress={() => handleDropdownSelect('Guests')}>
//             <Text style={styles.dropdownText}>Guests</Text>
//             <Image
//               source={require('../assets/dpicon.png')}
//               style={styles.dropdownIcon}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Dropdown for Preferred Time */}
//       <View style={styles.dropdownContainer}>
//       <Image
//         source={require('../assets/ptime.png')}
        
//       />
//         <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownSelect('Preferred Time')}>
//           <Text style={styles.dropdownText}>Preferred Time</Text>
//         </TouchableOpacity>
//         <Image
//           source={require('../assets/dpicon.png')}
//           style={styles.dropdownIcon}
//         />
//       </View>
//       <View style={styles.dropdownContainer}>
//       <Image
//         source={require('../assets/bak.png')}
        
//       />
//         <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDropdownSelect('Preferred Time')}>
//           <Text style={styles.dropdownText}>Backup Time</Text>
//         </TouchableOpacity>
//         <Image
//           source={require('../assets/dpicon.png')}
//           style={styles.dropdownIcon}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} >
//         <LinearGradient
//           colors={['#E6548D', '#F1C365']}
//           style={styles.gradient}
//           start={{ x: 0, y: 0 }} 
//           end={{ x: 1, y: 0 }}   
//         >
//           <Text style={styles.buttonText}>Confirm Reservation</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     backgroundColor: '#470D25',
//   },
//   dropdownContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ffffff', 
//     marginBottom: 20,
//     fontSize:16,
//     height:30
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',

//   },
//   halfWidth: {
//     width: '45%',

//   },
//   dropdownOption: {
//     height:30,
//     fontSize:16
//   },
//   dropdownText: {
//     color: '#fff',
//   },
//   dropdownIcon: {
//     width: 10,
//     height: 10,
//     tintColor: '#fff',
//   },
//   button: {
//     width: '100%', 
//     marginTop: 10
//   },
//   gradient: {
//     padding: 15,
//     alignItems: 'center',
//     width: '100%', 
//   },
//   buttonText: {
//     color: '#270614',
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   logo: {
//     width: 140, 
//     height: 140, 
//     alignSelf: 'center', 
//     marginBottom:20
//   },
// });

// export default Reservation;


// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Image, Modal } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Reservation = ({ navigation }: any) => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   // Function to handle dropdown selection
//   const handleDropdownSelect = (option: string) => {
//     setSelectedOption(option);
//   };

//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/IMG.png')}
//         style={styles.logo}
//       />

//       {/* Dropdown for Select Restaurant */}
//       <TouchableOpacity style={styles.dropdownContainer} onPress={() => toggleModal()}>
//         <Image source={require('../assets/ring.png')} style={styles.image} />
//         <Text style={styles.dropdownText}>Select Restaurant</Text>
//         <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
//       </TouchableOpacity>

//       {/* Dropdowns for Date and Guests */}
//       <View style={styles.row}>
//         <TouchableOpacity style={[styles.halfWidth, styles.dropdownContainer]} onPress={() => handleDropdownSelect('Date')}>
//           <Image source={require('../assets/date.png')} style={styles.image} />
//           <Text style={styles.dropdownText}>Date</Text>
//           <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
//         </TouchableOpacity>

//         {/* Guests Dropdown */}
//         <TouchableOpacity style={[styles.halfWidth, styles.dropdownContainer]} onPress={() => handleDropdownSelect('Guests')}>
//           <Image source={require('../assets/guests.png')} style={styles.image} />
//           <Text style={styles.dropdownText}>Guests</Text>
//           <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
//         </TouchableOpacity>
//       </View>

//       {/* Dropdown for Preferred Time */}
//       <TouchableOpacity style={styles.dropdownContainer} onPress={() => handleDropdownSelect('Preferred Time')}>
//         <Image source={require('../assets/ptime.png')} style={styles.image} />
//         <Text style={styles.dropdownText}>Preferred Time</Text>
//         <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
//       </TouchableOpacity>

//       {/* Dropdown for Backup Time */}
//       <TouchableOpacity style={styles.dropdownContainer} onPress={() => handleDropdownSelect('Backup Time')}>
//         <Image source={require('../assets/bak.png')} style={styles.image} />
//         <Text style={styles.dropdownText}>Backup Time</Text>
//         <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
//       </TouchableOpacity>

//       {/* Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={showModal}
//         onRequestClose={() => {
//           toggleModal();
//         }}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {/* Content of your modal goes here */}
//             <Text>Modal Content</Text>
//             <TouchableOpacity onPress={() => toggleModal()}>
//               <Text>Close Modal</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       <TouchableOpacity style={styles.button}>
//         <LinearGradient
//           colors={['#E6548D', '#F1C365']}
//           style={styles.gradient}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//         >
//           <Text style={styles.buttonText}>Confirm Reservation</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 30,
//     backgroundColor: '#470D25',
//   },
//   dropdownContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ffffff',
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   halfWidth: {
//     width: '45%',
//   },
//   dropdownText: {
//     color: '#fff',
//   },
//   dropdownIcon: {
//     width: 20,
//     height: 20,
//     tintColor: '#fff',
//   },
//   button: {
//     width: '100%',
//     marginTop: 10,
//   },
//   gradient: {
//     padding: 15,
//     alignItems: 'center',
//     width: '100%',
//   },
//   buttonText: {
//     color: '#270614',
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   logo: {
//     width: 140,
//     height: 140,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//   },
// });

// export default Reservation;



import React, { useState } from 'react';
import { StyleSheet, View, Text,TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Reservation = ({ navigation }: any) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCVV] = useState('');

  
  const handleDropdownSelect = (option: string) => {
    setSelectedOption(option);
  };

 
  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
        <TouchableOpacity style={[styles.halfWidth, styles.dropdownContainer]} onPress={() => handleDropdownSelect('Date')}>
          <Image source={require('../assets/date.png')} style={styles.image} />
          <Text style={styles.dropdownText}>Date</Text>
           
          <Image source={require('../assets/dpicon.png')} style={styles.dropdownIcon} />
        </TouchableOpacity>

        
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
            {/* Content of your modal goes here */}
            <Text>Modal Content</Text>
            <TouchableOpacity onPress={() => toggleModal()}>
              <Text>Close Modal</Text>
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
    width: 15,
    height: 15,
    tintColor: '#fff',
  },
  maincontent:{
    fontSize:16,
    color:'#fff',
    textAlign:"center",
    padding:10

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
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
    marginBottom:10
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
});

export default Reservation;
