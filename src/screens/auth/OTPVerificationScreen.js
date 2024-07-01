import React, { useState } from 'react';
import { Text, SafeAreaView, KeyboardAvoidingView, ScrollView, View, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Foect from 'foect';
import { apiLink } from '../../header/url';
import SCREENS from '..';
import { COLORS, FONTS } from '../../constants';

const OTPVerificationScreen = ({ navigation, route }) => {
  const [otpUser, setOTPUser] = useState("");
  const { email } = route.params;

  const onOTPPressed = async () => {
    console.log(otpUser);
    if (!otpUser || otpUser.length !== 6) {
      alert("Vui lòng nhập đúng mã OTP.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otpToken: otpUser,
        }),
      });

      if (!response.ok) {
        alert("Xác thực thất bại!");
        return;
      }

      const data = await response.json();
      console.log('OTP verification successful:', data);

      if (!data.user) {
        console.log(data);
        alert("Xác thực thất bại! Vui lòng kiểm tra mã xác thực.");
        return;
      }

      alert("Xác thực thành công!");
      navigation.navigate(SCREENS.LOGIN);

    } catch (error) {
      alert("Xác thực thất bại! Vui lòng kiểm tra mã xác thực.");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}>
      <SafeAreaView style={{ marginHorizontal: 30 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              marginTop: 60,
              textAlign: 'center',
              fontSize: 24,
            }}>
            XÁC NHẬN TÀI KHOẢN
          </Text>

          <Foect.Form
            onValidSubmit={model => {
              Alert.alert('Payload', JSON.stringify(model));
            }}>
            {form => (
              <View>
                <View style={{ flexDirection: 'row', marginTop: 50 }}>
                  <CustomInput
                    style={{
                      backgroundColor: '#fff',
                      height: 50,
                      maxHeight: 50,
                      minHeight: 50,
                      fontSize: 16,
                      borderRadius: 10,
                      paddingHorizontal: 20,
                      marginTop: 50,
                    }}
                    placeholder="Email"
                    placeholderTextColor='#8B8B8B'
                    cursorColor='orange'
                    selectionColor='orange'
                    value={email}
                    editable={false} // Không cho phép chỉnh sửa email
                  />
                </View>

                <Foect.Control
                  name="otp" required pattern={/^[0-9]{6}$/}>
                  {control => (
                    <View>
                      <CustomInput
                        style={{
                          backgroundColor: '#fff',
                          height: 50,
                          maxHeight: 50,
                          minHeight: 50,
                          fontSize: 16,
                          borderRadius: 10,
                          paddingHorizontal: 20,
                          marginTop: 50,
                        }}
                        placeholder="Mã xác nhận"
                        placeholderTextColor='#8B8B8B'
                        cursorColor='orange'
                        selectionColor='orange'
                        value={otpUser}
                        setValue={setOTPUser}
                      />
                    </View>
                  )}
                </Foect.Control>

                <CustomButton
                  onPress={onOTPPressed}
                  bgColor='#76D7C4'
                  text="Xác nhận"
                />
              </View>
            )}
          </Foect.Form>

        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OTPVerificationScreen;
