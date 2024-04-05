import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

interface ProfileDropdownProps {
  isVisible: boolean;
  onLogout: () => void;
  onAccountSettings: () => void;
  onReservation: () => void;
  onMyaccount: () => void;
  onPayment: () => void;
  onClose: () => void; 
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  isVisible,
  onLogout,
  onAccountSettings,
  onReservation,
  onMyaccount,
  onPayment,
  onClose,
}) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
    // Perform logout action here
    // For example, you might clear user authentication tokens, navigate to the sign-in screen, etc.
    onLogout();
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.dropdown}>
          <View style={styles.main}>
          <View style={styles.header}>
          <TouchableOpacity>
          <Image source={require('../../assets/Subtract.png')}  />
          </TouchableOpacity>
          <Text style={styles.headname}>Eric Sullivan</Text>
          </View>
          <View>
          <TouchableOpacity onPress={onClose}>
                <Image source={require('../../assets/close.png')} />
              </TouchableOpacity>
          </View>
          </View>
          <View style={styles.account}>
            <View>
            <View>
            <TouchableOpacity onPress={onMyaccount} style={styles.dropdownItem}>
            <View style={styles.itemContent}>
              <Image source={require('../../assets/puser.png')} style={styles.icon} />
              <Text style={styles.dropdownText}>Profile</Text>
            </View>
          </TouchableOpacity>
          </View>
            <View>
            <TouchableOpacity onPress={onReservation} style={styles.dropdownItem}>
            <View style={styles.itemContent}>
              <Image source={require('../../assets/Mask.png')} style={styles.icon} />
              <Text style={styles.dropdownText}>Reservation</Text>
            </View>
          </TouchableOpacity>
          </View>
            <View>
            <TouchableOpacity onPress={onPayment} style={styles.dropdownItem}>
            <View style={styles.itemContent}>
              <Image source={require('../../assets/pay.png')} style={styles.icon} />
              <Text style={styles.dropdownText}>Payment Method</Text>
            </View>
          </TouchableOpacity>
          </View>
            {/* <View>
            <TouchableOpacity onPress={onAccountSettings} style={styles.dropdownItem}>
            <View style={styles.itemContent}>
              <Image source={require('../../assets/setting.png')} style={styles.icon} />
              <Text style={styles.dropdownText}>Settings</Text>
            </View>
          </TouchableOpacity>
          </View> */}
          
          </View>
          
          </View>

          <View style={styles.footer}>
          <TouchableOpacity onPress={handleLogout} style={styles.footer}>
            <View style={styles.itemContent}>
              <Image source={require('../../assets/logout.png')} style={styles.icon} />
              <Text style={styles.dropdownText}>Logout</Text>
            </View>
          </TouchableOpacity>

          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align to the left side of the screen
  },
  dropdown: {
    width: "85%",
    height:"100%",
    backgroundColor: '#BF879F',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical:45,
    paddingHorizontal:30
  
  },
  dropdownItem: {
    paddingVertical:20,
    borderBottomWidth:1,
    borderBottomColor:"#470D25",

   

  },
  dropdownText: {
    fontSize: 17,
    fontFamily: 'IbarraRealNova-Regular',
    fontWeight:"600",
   
  },
  main:{
    flexDirection:"row",
    justifyContent:"space-between"

  },
  header:{
    flexDirection:"row",
    alignItems:"center",
  },
  headname:{
    marginLeft:10,
    fontSize:16,
    fontFamily: 'IbarraRealNova-Regular',
    fontWeight:"600",
    color:"white"

  },
  account:{
    marginTop:15
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24, 
    height: 24, 
    marginRight: 10, 
  },
 footer:{
  flex:1,
  justifyContent:"flex-end",

 }
});

export default ProfileDropdown;
