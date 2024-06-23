import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Lỗi', 'Bạn vui lòng nhập lại');
      return;
    }
    Alert.alert('Thành Công', 'Bạn đã gửi thành công');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.contactInfo}>Email: nhom2day@gmail.com</Text>
      <Text style={styles.contactInfo}>Facebook: miutinhom2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    flex:0.25,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius:10
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  contactInfo: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color:'gray',
    alignItems:'baseline',
    height:20
  }
});

export default ContactUsScreen;
