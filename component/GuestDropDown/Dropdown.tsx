import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const DropdownCom = () => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#E581AB'}]}>
          Guests
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Image
        source={require('../../assets/guests.png')}
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
        iconColor='#AA617F'
        placeholder={!isFocus ? 'Guests' : ''}
        searchPlaceholder="Search..."
        value={value}
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

export default DropdownCom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#470D25',
    paddingVertical: 16,
  },
  dropdown: {
    height: 50,
    backgroundColor: '#470D25',
    borderWidth: 0,

    // borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#470D25',
    left: 22,
    top: 20,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#F6BED6',
    fontFamily: 'IbarraRealNova-Regular',
  },
  placeholderStyle: {
    marginLeft: 30,
    fontSize: 16,
    color: '#F6BED6',
    fontFamily: 'IbarraRealNova-Regular',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#F6BED6',
    marginLeft: 30,
    fontFamily: 'IbarraRealNova-Regular',
  },
  iconStyle: {
    width: 30,
    height: 30,
   
  },
  inputSearchStyle: {
    height: 60,
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
    left: 4,
  },
});
