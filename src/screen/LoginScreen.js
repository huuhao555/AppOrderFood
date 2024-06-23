import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkEmail, setCheckEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState('');

  const onSubmit = () => {
    let formData = {
      _email: email,
      _password: password,
    }

    let regexEmail = new RegExp(/^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u);

    if (!regexEmail.test(formData._email)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }

    formData._password === '' ? setErrorPassword('Không được để Pass trống') : setErrorPassword('');
  }

  return (
   
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content"></StatusBar>
      <View style={styles.title}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>Login</Text>
        <Text>By signing in you are agreeing</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text> to our </Text>
          <TouchableOpacity>
            <Text style={{ color: '#1bcdff' }}>Terms and Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.group}>
          <TextInput placeholder="Email Address" style={styles.input} onChangeText={(value) => setEmail(value)} />
          <Text style={{ color: 'red' }}>{!checkEmail ? 'Không đúng định dạng' : ''}</Text>
        </View>

        <View style={styles.group}>
          <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
          <Text style={{ color: 'red' }}>{errorPassword}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => Alert.alert('Forgot your password?')}>
          <Text style={{ color: 'gray', alignSelf: 'flex-end', margin: 15 }}>Forgot Password</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Image source={require('../../asset/xmai.jpg')} resizeMode="contain"  />
        </View>
      </View>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    margin: 30,
    alignItems: 'center'
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  group: {
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'lightblue',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 100,
  },
  logo: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: "center"
  },
});

export default LoginScreen;
