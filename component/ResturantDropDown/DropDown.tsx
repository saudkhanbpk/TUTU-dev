import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Mastros', value: '1'},
  {label: 'STK', value: '2'},
  {label: 'Abe & Louies', value: '3'},
  {label: 'Savr', value: '4'},
  {label: 'Mariel', value: '5'},
  {label: 'Yvonnes', value: '6'},
  {label: 'Ruka', value: '7'},
  {label: 'Caveau', value: '8'},
  {label: 'Grille 23', value: '8'},
  {label: 'Lolita Fort Point', value: '8'},
  {label: 'Lolita Back bay', value: '8'},
  {label: 'Serafina', value: '8'},
  {label: 'Atlantic Fish', value: '8'},
  {label: 'Prima', value: '8'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#E581AB'}]}>
          Select Resturant
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Image
        source={require('../../assets/ring.png')}
        style={styles.inputImage}
      />
      <Dropdown
        style={[
          styles.dropdown,
          {borderBottomWidth: 1, borderColor: 'rgba(255, 255, 255, 0.3)'},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemContainerStyle={styles.itemContainer}
        iconStyle={styles.iconStyle}
        data={data}
        activeColor="#E581AB"
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Resturant' : ''}
        searchPlaceholder="Search..."
        value={value}
        iconColor='#AA617F'
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#470D25',
    paddingVertical: 16,
  },
  dropdown: {
    height: 40,
   backgroundColor: '#470D25',
   borderWidth: 0,

  },
  icon: {
    marginRight: 10,
    
  },
  label: {
    position: 'absolute',
    backgroundColor: '#470D25',
    left: 22,
    top: 20,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#F6BED6',
    fontFamily: 'IbarraRealNova-Regular',
  },
  placeholderStyle: {
    marginLeft: 40,
    fontSize: 16,
    color: '#F6BED6',
    fontFamily: 'IbarraRealNova-Regular',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#F6BED6',
    marginLeft: 40,
    fontFamily: 'IbarraRealNova-Regular',
  },
  iconStyle: {
    width: 24,
    height: 24,
    position:"relative",
    left:5

  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#2D0717',
    color: '#F6BED6',
    fontFamily: 'IbarraRealNova-Regular',
  },
  itemContainer: {
    backgroundColor: 'pink',
    color: 'pink',
  },

  inputImage: {
    width: 24,
    height: 24,
    zIndex: 999,
    top: 35,
   
  },
});
