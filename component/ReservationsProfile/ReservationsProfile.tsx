import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import ProfileDropdown from '../ProfileDpdown/ProfileDropdown';

const Reservations = ({ navigation }: any) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const data = [
    { label1: 'Date', 
    value1: '12/04/2024' ,
    label2: 'Restaurant',
    value2: 'Liberty Grille',
    label3: 'Total', 
    value3: '$50.00',
    label4: 'Guests',
     value4: '2' 
  },
    { label1: 'Date', 
    value1: '12/04/2024' ,
    label2: 'Restaurant',
    value2: 'Liberty Grille',
    label3: 'Total', 
    value3: '$50.00',
    label4: 'Guests',
     value4: '2' 
  },
    { label1: 'Date', 
    value1: '12/04/2024' ,
    label2: 'Restaurant',
    value2: 'Liberty Grille',
    label3: 'Total', 
    value3: '$50.00',
    label4: 'Guests',
     value4: '2' 
  },
    { label1: 'Date', 
    value1: '12/04/2024' ,
    label2: 'Restaurant',
    value2: 'Liberty Grille',
    label3: 'Total', 
    value3: '$50.00',
    label4: 'Guests',
     value4: '2' 
  },
    
  ];

  function handlemyReservation():void {
   
    setIsDropdownVisible(false); 
   };
 
   function handleLogout(): void {
     setIsDropdownVisible(false);
   }
 
   function handleAccountSettings(): void {
     setIsDropdownVisible(false); 
   }
 
   function handleMyaccount(): void {
     setIsDropdownVisible(false);
   }
 
   function handlePayment(): void {
     setIsDropdownVisible(false);
   }
 
   function handleClose(): void {
     setIsDropdownVisible(false);
   }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/arrow.png')}
              style={styles.headerIcon}
            />
          </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.headtxt}>Reservations</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('../../assets/Subtract.png')}
            style={styles.headerprof}
          />
               <ProfileDropdown
          // onMyaccount={handleMyaccount}
          // onReservation={handlemyReservation}
          // onPayment={handlePayment} 
          isVisible={isDropdownVisible}
          onLogout={handleLogout}
          onAccountSettings={handleAccountSettings}
          onClose={handleClose}
        />
        </TouchableOpacity>
      </View>

      {data.map((item, index) => (
        <View key={index} style={styles.mainbox}>
          <View style={styles.box1}>
            <Text style={[{fontSize:14,fontFamily: 'IbarraRealNova-Regular',color:"#fff",fontWeight:"600"}]}>{item.label1}: {item.value1}</Text>
            <Text style={[{fontSize:18,fontFamily: 'IbarraRealNova-Regular',color:"#F6BED6",fontWeight:"600"}]}>{item.label2}: {item.value2}</Text>
            <Text style={styles.text}>{item.label3}: {item.value3}</Text>
          </View>

          <View style={styles.box2}>
            <Text style={styles.text}>{item.label4}: {item.value4}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom:20,
    backgroundColor: '#470D25',
    fontSize: 16,
    fontFamily: 'IbarraRealNova-Regular',
  },
 
headerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',

},

headerIcon: {
  marginTop:10,
  width: 24,
  height: 24,
},
headerprof: {
  width: 50,
  height: 50,
},
headtxt:{
  marginTop:10,
  fontFamily: 'IbarraRealNova-Regular',
    color: '#E581AB',
    fontSize: 20,
    alignSelf:"center"
},
mainbox:{
  marginTop:20,
  flexDirection:"row",
  justifyContent:"space-between",
  borderBottomWidth:1,
  borderBottomColor:"#fff"

  
},
box1:{
  flexDirection:"column",
  width:"60%",
  height:100,
  gap:10
},
box2:{
  width:"40%",
alignItems:"flex-end",
justifyContent:"center",
height:100

},
text:{
  fontSize: 18,
    fontFamily: 'IbarraRealNova-Regular',
    color:"#fff",
    fontWeight:"600"
}


});


export default Reservations;
