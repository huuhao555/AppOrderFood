import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import Contact from '../lttb/src/screen/ContactUsScreen';
import HomeScreen from '../lttb/src/screen/HomeScreen';
import ListProduct from '../lttb/src/screen/ListProduct';
import LoginScreen from '../lttb/src/screen/LoginScreen';
import TableSelectionScreen from '../lttb/src/screen/TableSelectionScreen';
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
                source={require('.././lttb/asset/abc.jpg')}
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
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ListProduct" component={ListProduct} />
        <Tab.Screen name="TableSelectionScreen" component={TableSelectionScreen} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;