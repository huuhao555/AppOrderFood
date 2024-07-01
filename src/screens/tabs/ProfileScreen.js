import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SCREENS from '..';

const ProfileScreen = ({navigation}) => {
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/auth');
      setProducts(response.data);
    } catch (error) {
      console.error('There was an error fetching the products!', error);
    }
  };
  const handleLogout = () => {
    navigation.navigate(SCREENS.LOGIN)
  };
  const handleUpdatePass = () => {
    navigation.navigate(SCREENS.UPDATEPASS)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Đăng Xuất</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.updatePassButton} onPress={handleUpdatePass}>
      <Text style={styles.updatepassText}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: { 
    
    marginTop: 20,
    backgroundColor: '#f44336', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  updatePassButton:{
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: 'orange', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  updatepassText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default ProfileScreen;
