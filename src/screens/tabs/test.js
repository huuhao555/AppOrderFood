
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('There was an error fetching the products!', error);
    }
  };

  const [productQuantities, setProductQuantities] = useState({});

  const adjustQuantity = (productId, increment) => {
    const currentQuantity = productQuantities[productId] || 0;
    if (!increment && currentQuantity === 0) {
      return;
    }
    const newQuantity = currentQuantity + (increment ? 1 : -1);
    setProductQuantities({ ...productQuantities, [productId]: newQuantity });
  };

  const handleConfirm = () => {
    const selectedProducts = products.filter(item => productQuantities[item.ID_Product] > 0);
    
    if (selectedProducts.length > 0) {
      const dataToSend = selectedProducts.map(item => ({
        name: item.Name,
        quantity: productQuantities[item.ID_Product],
        price: item.Price
      }));

      navigation.navigate('Payment', { products: dataToSend });
    } else {
      Alert.alert('Thông báo', 'Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
    }
  };

  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product }); 
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
      <View style={styles.productContainer}>
        <View style={styles.productInfo}>
          <Image style={styles.productImage} source={{ uri: `${item.Image}` }} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.Name}</Text>
            <Text style={styles.productPrice}>{item.Price} đ</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => adjustQuantity(item.ID_Product, false)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{productQuantities[item.ID_Product] || 0}</Text>
          <TouchableOpacity onPress={() => adjustQuantity(item.ID_Product, true)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DANH SÁCH SẢN PHẨM</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.ID_Product.toString()}
      />
      <TouchableOpacity onPress={handleConfirm}>
        <Text style={styles.buttonSubmit}>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ddd'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 12
  },
  productDetails: {
    flex: 1
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  productPrice: {
    fontSize: 16,
    color: '#666'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginTop: 50
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 4
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 8
  },
  buttonSubmit: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }
});

export default ProductList;
