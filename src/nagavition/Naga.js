import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Contact from "./src/screen/Contact";
import HomeScreen from "./src/screen/HomeScreen";
import ListProduct from "./src/screen/ListProduct";
import LoginScreen from "./src/screen/LoginScreen";

const Tab = createBottomTabNavigator();
const App =()=> {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'login') {
              iconName = focused ? 'logos' : 'logos';
            } 
                     
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
                <Tab.Screen name ="Login" component ={LoginScreen}></Tab.Screen>
                <Tab.Screen name ="Home" component ={HomeScreen}></Tab.Screen>
                <Tab.Screen name ="ListProduct" component ={ListProduct}></Tab.Screen>
                <Tab.Screen name ="Contact" component ={Contact}></Tab.Screen>
                </Tab.Navigator>
        </NavigationContainer>
    )
}
export default App;