import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import SCREENS from '..';

const HomeScreen = ({ navigation }) => {
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

  const navigateToProductDetail = (product) => {
    navigation.navigate(SCREENS.PRODUCTDETAIL, { product }); 
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
       
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.containerHeader}>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(SCREENS.TABLESELECTION)}>
                    <Image source={require('../../assets/images/taicho.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(SCREENS.PRODUCTLIST)}>
                    <Image source={require('../../assets/images/mangve.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.ID_Product.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  containerHeader:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 10
  },
  item: {
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden'
},
image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
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

export default HomeScreen;
