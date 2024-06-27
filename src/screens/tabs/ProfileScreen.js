import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SCREENS from '..';

const ProfileScreen = ({navigation}) => {
  const handleLogout = () => {
    navigation.navigate(SCREENS.LOGIN)
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Thông tin cá nhân</Text> */}
      
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Đăng Xuất</Text>
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
  logoutText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
