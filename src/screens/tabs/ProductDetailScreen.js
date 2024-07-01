import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params || {}; 
  return (
    <View style={styles.container}>
      <Image style={styles.productImage} source={{ uri: `${product.Image}` }} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{product.Name}</Text>
        <Text style={styles.productPrice}>{product.Price} đ</Text>
        <Text style={styles.productDescription}>{product.Description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  productDetails: {
    paddingHorizontal: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    color: '#666',
    marginBottom: 12,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default ProductDetailScreen;