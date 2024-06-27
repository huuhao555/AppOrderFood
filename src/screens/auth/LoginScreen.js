import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import IMAGES from '../../assets/images';
import SCREENS from '../index';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const onSignInPressed = async () => {

    if (!username) {
      Alert.alert('Thông báo', 'Vui lòng nhập Email.');
      return;
    }

    if (!password) {
      Alert.alert('Thông báo', 'Vui lòng nhập mật khẩu.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "email": username,
          "password": password
        }),
      });
  
      if (!response.ok) {
        Alert.alert('Thông báo',"Đăng nhập không thành công");
        return;
      }
      const data = await response.json();
      Alert.alert('Thông báo', 'Đăng nhập thành công')
      navigation.navigate(SCREENS.HOME);
      console.log('Login successful:', data);
    } catch (error) {
      alert("Đăng nhập không thành công, vui lòng kiểm tra Email và Mật khẩu.");
    }
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 30 }}>
      <Image source={IMAGES.LOGON4} style={{ height: 350, width: 'auto' }} />
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 50,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Email"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
        value={username}
        onChangeText={text => setUsername(text)}
        error={usernameError}
      />
      <TextInput
        style={{
          backgroundColor: COLORS.WHITE,
          height: 50,
          maxHeight: 50,
          minHeight: 50,
          fontSize: 16,
          borderRadius: 10,
          paddingHorizontal: 20,
          marginTop: 20,
          fontFamily: FONTS.MONTSERRAT,
        }}
        placeholder="Mật khẩu"
        placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
        cursorColor={COLORS.ORANGE}
        selectionColor={COLORS.ORANGE}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        error={passwordError}
      />
      <Text
        style={{
          fontFamily: FONTS.MONTSERRAT,
          textAlign: 'right',
          marginTop: 20,
          color: COLORS.text,
        }}>
        Quên mật khẩu?
      </Text>
      <TouchableWithoutFeedback onPress={onSignInPressed}>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.ORANGE,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: COLORS.WHITE,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Đăng Nhập
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Text style={{ fontFamily: FONTS.MONTSERRAT_MEDIUM, color: COLORS.text }}>
          Bạn chưa có tài khoản?
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: 'orange',
            }}>
            Đăng ký
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
