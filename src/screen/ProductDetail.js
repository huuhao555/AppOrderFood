import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProductDetailScreen = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const sizes = ['Small', 'Medium', 'Large'];
  const toppings = ['Trân châu đen', 'Phô mai', 'Thạch dừa', 'Trái cây', 'Pudding', 'Trân châu trắng'];
  const ices = ['Đá 50%', 'Đá 70%', 'Đá 100%']

  const toggleTopping = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(item => item !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.productName}>Trà Sữa Truyền Thống</Text>
      <Image 
        source={{ uri: 'https://olongha.com/wp-content/uploads/2021/12/cach-pha-tra-sua-truyen-thong-123.png' }} 
        style={styles.productImage}
      />
      

      <Text style={styles.sectionTitle}>Chọn size</Text>
      <View style={styles.optionsContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[
              styles.optionButton,
              selectedSize === size && styles.selectedOptionButton
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={styles.optionText}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Chọn đá</Text>
      <FlatList
        data={ices}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedToppings.includes(item) && styles.selectedOptionButton
            ]}
            onPress={() => toggleTopping(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />
      <Text style={styles.sectionTitle}>Chọn món order thêm</Text>
      <FlatList
        data={toppings}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedToppings.includes(item) && styles.selectedOptionButton
            ]}
            onPress={() => toggleTopping(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      />

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Đặt hàng</Text>
      </TouchableOpacity>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  optionButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedOptionButton: {
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
  },
  optionText: {
    fontSize: 16,
  },
  orderButton: {
    marginTop: 20,
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
