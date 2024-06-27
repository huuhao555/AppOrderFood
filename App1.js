import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import Contact from './src/screens/tabs/ContactUsScreen';
import HomeScreen from './src/screens/tabs/HomeScreen';
import ListProduct from './src/screens/tabs/ListProduct';
import LoginScreen from './src/screens/auth/LoginScreen';
import Register from './src/screens/auth/SignupScreen';
import PaymentScreen from './src/screens/tabs/PaymentScreen';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'logos' : 'logos';
            } else if (route.name === 'ListProduct') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'contacts' : 'contacts-outline';
            }

            return (
              <Image
                source={require('./src/assets/images/abc.jpg')}
                style={{ width: 80, height: 10, }}
              />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            display: 'flex',
          },
        })}
      >
        <Tab.Screen name="Login" component={Register} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ListProduct" component={ListProduct} />
        <Tab.Screen name="TableSelectionScreen" component={PaymentScreen} />
        <Tab.Screen name="Contact" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;