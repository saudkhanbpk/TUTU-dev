import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';


const termsAndConditionsData = [
  {
    title: 'Acceptance of Terms:',
    content: 'These Terms constitute a legally binding agreement between you and Confirmed by Tutu regarding your use of the App. By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms.'
  },
  {
    title: 'User Eligibility:',
    content: 'You must be at least 18 years old to use the App. By using the App, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.'
  },
  {
    title: 'Reservation Services:',
    content: 'Confirmed by Tutu provides a platform that allows users to make restaurant reservations. We do not own or operate any restaurants listed on the App. The availability of reservations is subject to the discretion of the participating restaurants.'
  },
  {
    title: 'Reservation Confirmation:',
    content: 'While Confirmed by Tutu endeavors to confirm reservations accurately, we cannot guarantee the availability of reservations at all times. The confirmation of a reservation is subject to the availability of tables at the chosen restaurant.'
  },
  {
    title: 'Cancellation Policy:',
    content: 'Users are responsible for managing their reservations through the App. If you need to cancel a reservation, you must do so in a timely manner through the App\'s cancellation feature. Failure to cancel reservations may result in restrictions on your future use of the App.'
  },
  {
    title: 'Accuracy of Information:',
    content: 'Confirmed by Tutu strives to provide accurate information about restaurants, including their locations, operating hours, menus, and reservation availability. However, we do not guarantee the accuracy, completeness, or reliability of any information provided on the App.'
  },
  {
    title: 'User Conduct:',
    content: 'Users agree to use the App in compliance with all applicable laws and regulations. You must not use the App for any unlawful or prohibited purpose. Additionally, you must not engage in any activity that could damage, disable, or impair the functionality of the App.'
  },
  {
    title: 'Privacy Policy:',
    content: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and disclose your personal information. By using the App, you consent to the collection and use of your personal information as described in the Privacy Policy.'
  },
  {
    title: 'Intellectual Property:',
    content: 'The App and its content, including text, graphics, logos, and images, are protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or create derivative works based on the App without our prior written consent.'
  },
  {
    title: 'Disclaimer of Warranties:',
    content: 'The App is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. Confirmed by Tutu disclaims all warranties, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.'
  },
  {
    title: 'Limitation of Liability:',
    content: 'In no event shall Confirmed by Tutu be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App, including, but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.'
  },
  {
    title: 'Governing Law:',
    content: 'These Terms shall be governed by and construed in accordance with the laws of [insert jurisdiction]. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [insert jurisdiction].'
  },
  {
    title: 'Changes to Terms:',
    content: 'Confirmed by Tutu reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.'
  },
  {
    title: 'Contact Us:',
    content: 'If you have any questions or concerns about these Terms, please contact us at [insert contact information].'
  }
];

const Privacy = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Terms and Conditions</Text>
    {termsAndConditionsData.map((section, index) => (
      <View key={index} style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <Text style={styles.text}>{section.content}</Text>
      </View>
    ))}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#470D25',
  },
  title: {
    fontSize: 30,
    color: '#E581AB',
    marginBottom: 5,
    fontWeight: 'normal',
  },
  sectionContainer: {
    display:'flex',
    direction:'row',
    flexWrap:'wrap'
  },
  sectionTitle: {
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  text: {
    color:'white',
    fontSize: 16,
  },
});

export default Privacy;
