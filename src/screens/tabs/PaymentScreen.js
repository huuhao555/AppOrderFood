import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios'; // Import Axios
import SCREENS from '..';

const PaymentScreen = ({ route, navigation }) => {
  const { products } = route.params;

  const renderItem = (item, index) => (
    <View style={styles.row} key={index}>
      <Text style={[styles.item, styles.stt]}>{index + 1}</Text>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.item}>{item.price} đ</Text>
      <Text style={styles.item}>{item.quantity}</Text>
      <Text style={styles.item}>{item.quantity * item.price} đ</Text>
    </View>
  );

  const totalPrice = products.reduce((total, item) => total + item.quantity * item.price, 0);

  const navigateToListProduct = () => {
    navigation.goBack();
  };

  const createOrder = async () => {
    try {
      const dataToSend = {
        TotalAmount: totalPrice,
      };

      const response = await axios.post('http://localhost:3000/api/order', dataToSend);
      
      console.log('Order created successfully:', response.data);
      Alert.alert('Thông báo', 'Thanh toán thành công!!!');
      navigation.navigate(SCREENS.HOME); // Navigate to home screen or any other screen after successful payment
    } catch (error) {
      console.error('Error creating order:', error);
      Alert.alert('Thông báo', 'Đã xảy ra lỗi khi thanh toán.');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>THÔNG TIN THANH TOÁN</Text>
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.stt]}>STT</Text>
          <Text style={[styles.headerText]}>Name</Text>
          <Text style={styles.headerText}>Price</Text>
          <Text style={styles.headerText}>Quantity</Text>
          <Text style={styles.headerText}>Total Amount</Text>
        </View>
        {products.map((item, index) => renderItem(item, index))}
        <View style={styles.footer}>
          <Text style={styles.total}>Tổng tiền: {totalPrice} đ</Text>
          <View style={styles.handlebutton}>
            <TouchableOpacity style={styles.button} onPress={navigateToListProduct}>
              <Text style={styles.buttonText}>Quay lại</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNewScreen]} onPress={createOrder}>
              <Text style={styles.buttonText}>Thanh Toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    fontSize: 16
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  item: {
    flex: 1,
    textAlign: 'center'
  },
  itemName: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 15
  },
  stt: {
    flex: 0.5,
  },
  footer: {
    marginTop: 16,
    alignItems: 'flex-end'
  },
  handlebutton:{
    flexDirection: 'row',
    marginRight: 20,

  
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 10,
    width: 150,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonNewScreen: {
    backgroundColor: '#3498db',
    marginLeft: 20,
  }
});

export default PaymentScreen;
