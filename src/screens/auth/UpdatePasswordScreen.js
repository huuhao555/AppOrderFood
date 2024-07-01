import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, Image, Alert, Platform } from 'react-native';
import { SafeAreaView, ScrollView, TextInput, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Foect from 'foect';
import SessionStorage from 'react-native-session-storage';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';
import IMAGES from '../../assets/images/index';

const UpdatePasswordScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [resPasswordNew, setResPasswordNew] = useState('');

  const onSignUpPressed = async () => {
    const token = await SessionStorage.getItem('@storage_key');
    try {
      const response = await fetch('http://localhost:3000/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: userEmail,
          oldPassword: passwordOld,
          newPassword: passwordNew,
          resNewPassword: resPasswordNew,
        }),
      });

      if (response.ok) {
        Alert.alert('Thông báo:', 'Đổi mật khẩu thành công!!!', [
          { text: 'OK', onPress: () => navigation.navigate(SCREENS.LOGIN) }
        ]);
      } else {
        Alert.alert('Thông báo', 'Đổi mật khẩu không thành công!!!');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Thông báo', 'Đổi mật khẩu không thành công! Vui lòng kiểm tra lại thông tin.');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{ marginHorizontal: 30 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={IMAGES.LOGON4} style={{ height: 350, width: 'auto' }} />
          <Foect.Form>
            <Foect.Control name="email" required email>
              {control => (
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => {
                      control.onChange(text);
                      setUserEmail(text);
                    }}
                    value={control.value}
                  />
                  {control.isInvalid && !control.errors.required && control.errors.email && (
                    <Text style={styles.errorText}>Email is not valid</Text>
                  )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control name="passwordOld" passnew pattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/}>
              {control => (
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu cũ"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.MAIN}
                    selectionColor={COLORS.MAIN}
                    onChangeText={text => {
                      control.onChange(text);
                      setPasswordOld(text);
                    }}
                    value={control.value}
                  />
                </View>
              )}
            </Foect.Control>
            <Foect.Control name="password" required pattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/}>
              {control => (
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu mới"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => {
                      control.onChange(text);
                      setPasswordNew(text);
                    }}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={styles.errorText}>Vui lòng nhập mật khẩu</Text>
                  )}
                  {control.isInvalid && !control.errors.required && control.errors.pattern && (
                    <Text style={styles.errorText}>
                      Mật khẩu phải chứa tối thiểu 8 ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, số và một ký tự đặc biệt
                    </Text>
                  )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control name="confirm_password" required equalToControl="password">
              {control => (
                <View style={{ marginTop: 20 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập lại mật khẩu mới"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => {
                      control.onChange(text);
                      setResPasswordNew(text);
                    }}
                    value={control.value}
                  />
                  {control.isInvalid && control.errors.required && (
                    <Text style={styles.errorText}>Vui lòng nhập lại mật khẩu</Text>
                  )}
                  {control.isInvalid && !control.errors.required && control.errors.equalToControl && (
                    <Text style={styles.errorText}>Mật khẩu không khớp</Text>
                  )}
                </View>
              )}
            </Foect.Control>
            <CustomButton
              onPress={onSignUpPressed}
              bgColor={COLORS.MAIN}
              text="Đổi mật khẩu"
            />
          </Foect.Form>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  input: {
    backgroundColor: COLORS.WHITE,
    height: 50,
    maxHeight: 50,
    minHeight: 50,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontFamily: FONTS.MONTSERRAT,
  },
  errorText: {
    marginTop: 5,
    marginStart: 5,
    color: 'red',
  },
};

export default UpdatePasswordScreen;
