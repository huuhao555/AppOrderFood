import React from "react";
import { ScrollView, View } from "react-native"; 
import Header from "../components/Header";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";

const HomeScreen = () => {
    return (
        <View style={{ paddingHorizontal: 15 }}>
            <Header />
            <ScrollView>
                <ListCategory />
                <ListProduct />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
