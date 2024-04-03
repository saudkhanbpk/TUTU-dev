import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const restaurants = [
  { value:"Mastros" ,label: "Mastros",  },
  { value:"STK" ,label: "STK",  },
  { value:"Abe & Louie's" ,label: "Abe & Louie's", },
  { value:"Savr" ,label: "Savr",  },
  { value:"Mariel" ,label: "Mariel",  },
  { value:"Yvonnes" ,label: "Yvonnes",  },
  { value:"Ruka" ,label: "Ruka",  },
  { value:"Caveau" ,label: "Caveau",  },
  { value:"Grille 23" ,label: "Grille 23",  },
  { value:"Lolita Fort Point" ,label: "Lolita Fort Point",  },
  { value:"Lolita Fort Point" ,label: "Lolita Back bay",  },
  { value:"Serafina" ,label: "Serafina",  },
  { value:"Atlantic Fish" ,label: "Atlantic Fish",  },
  { value:"Prima" ,label: "Prima",  }
];

const DropdownComponent = ({onValueChange}: {onValueChange: (value: string) => void}) => {
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
        data={restaurants}
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
          onValueChange(item.value);
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
    width: 25,
    height: 25,
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
    left: 2,
  },
});
