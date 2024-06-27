import React, {useState} from 'react';
import {Text, Image,} from 'react-native';
import {SafeAreaView} from 'react-native';
import {COLORS, FONTS} from '../../constants';
import {TextInput} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import {View} from 'react-native';
import Foect from 'foect';
import {Alert} from 'react-native';
import IMAGES from '../../assets/images';

const SignupScreen = props => {
  const {navigation} = props;
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSignUpPressed = async () => {

  console.log("userName", userName)
  console.log("userEmail", userEmail)
  console.log("password", password)
  console.log("confirmPassword", confirmPassword)
    
    if ((!userName) || (!userEmail) || (!password)) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    
    try {
      const response = await fetch( 'http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": userName,
            "email": userEmail,
            "password": password,
            "resPassword": confirmPassword,
        }),
      });

      if (!response.ok) {
        alert("Đăng ký không thành công.");
        return;
      }
      
      const data = await response.json();
      Alert.alert('Thông báo', 'Đăng ký thành công!!')
      console.log('Register successful:', data);
      setUserName('');
      setUserEmail('');
      setPassword('');
        setConfirmPassword('');
    } catch (error) {
      alert("Đăng ký không thành công! Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      <Image source={IMAGES.LOGON4} style={{ height: 350, width: 'auto' }} />
      <Foect.Form
        onValidSubmit={model => {
          Alert.alert('Payload', JSON.stringify(model));
        }}>
        {form => (
          <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              
              <Foect.Control
                name="Username"
                required
                minLength={2}
                maxLength={32}>
                {control => (
                  <View style={{flex: 1, marginStart: 5}}>
                    <TextInput
                      style={{
                        backgroundColor: COLORS.WHITE,
                        height: 50,
                        maxHeight: 50,
                        minHeight: 50,
                        fontSize: 16,
                        borderRadius: 10,
                        paddingHorizontal: 20,
                        fontFamily: FONTS.MONTSERRAT,
                      }}
                      placeholder="Họ và tên"
                      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                      cursorColor={COLORS.ORANGE}
                      selectionColor={COLORS.ORANGE}
                      onBlur={control.markAsTouched}
                      onChangeText={text => control.onChange(text)}
                      value={control.value}
                    />
                    { setUserName(control.value)}
                    {control.isInvalid &&
                      !control.errors.required &&
                      control.errors.minLength && (
                        <Text
                          style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                          Last name should be at least 2 characters long
                        </Text>
                      )}
                    {control.isInvalid && control.errors.maxLength && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Last name should be maximum of 32 characters long
                      </Text>
                    )}
                  </View>
                )}
              </Foect.Control>
            </View>
            <Foect.Control name="email" required email>
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Email"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  { setUserEmail(control.value)}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.email && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Email is not valid
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control
              name="password"
              required
              pattern={
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              }>
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Mật khẩu"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {  setPassword(control.value)}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.pattern && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Password should contain minimum eight characters, at
                        least one uppercase letter, one lowercase letter, one
                        number and one special character
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control
              name="confirm_password"
              required
              equalToControl="password">
              {control => (
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      backgroundColor: COLORS.WHITE,
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      fontFamily: FONTS.MONTSERRAT,
                    }}
                    placeholder="Nhập lại mật khẩu"
                    placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
                    cursorColor={COLORS.ORANGE}
                    selectionColor={COLORS.ORANGE}
                    onBlur={control.markAsTouched}
                    onChangeText={text => control.onChange(text)}
                    value={control.value}
                  />
                  {setConfirmPassword(control.value)}
                  {control.isInvalid &&
                    !control.errors.required &&
                    control.errors.equalToControl && (
                      <Text
                        style={{marginTop: 5, marginStart: 5, color: 'red'}}>
                        Passwords do not match
                      </Text>
                    )}
                </View>
              )}
            </Foect.Control>
            
            <TouchableWithoutFeedback onPress={onSignUpPressed}>
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
                  ĐĂNG KÝ
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Foect.Form>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
        <Text style={{fontFamily: FONTS.MONTSERRAT_MEDIUM}}>
          Bạn đã có tài khoản
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Text
            style={{
              marginStart: 5,
              fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
              color: 'orange',
            }}>
            Đăng nhập
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
