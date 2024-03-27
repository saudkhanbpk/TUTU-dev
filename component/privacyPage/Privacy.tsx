import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

const Privacy = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Privacy Component</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#470D25',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default Privacy;
