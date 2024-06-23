import { Formik } from 'formik';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Tên là bắt buộc'),
  email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: Yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
});

const DangKyForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // Xử lý đăng ký ở đây (ví dụ: gọi API)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        
        <View style={styles.title }>
        <Text style={styles.ko}>Register Account</Text>
        <Text style={styles.po}>Bạn hãy điền thông tin vào Form</Text>
          <TextInput 
            label="Tên"
            mode="outlined"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            error={touched.name && !!errors.name} // Chuyển đổi giá trị errors.name thành boolean
          />
          {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          <TextInput
            label="Email"
            mode="outlined"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={touched.email && !!errors.email}
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          
          <TextInput
            label="Mật khẩu"
            mode="outlined"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={touched.password && !!errors.password}
          />
          {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
          
          <Button mode="contained" onPress={(e) => handleSubmit()} style={styles.button}>
            Đăng ký
          </Button>
          
          <View style={styles.xm}>
          <Image source={require('../../asset/xmai.jpg')}/>
              </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    marginTop: 20,
    backgroundColor:'lightblue'
  },
  xm:{
    marginTop:80,
    transform: [{ scaleX: 1.125 }],
    flexDirection: 'row',
    justifyContent:"center" ,
    flex:2,
  },
  title:{
    margin: 30,
    justifyContent:'center',
    flex:1,
  },
  ko:{
    fontWeight:'bold',
    fontSize:30,
    color:'black',
    flex:1.5,
    alignSelf:'center'
  },
  po:{
    flex:3,
    alignSelf:'center'
  }
});

export default DangKyForm;
