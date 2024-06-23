// ListCategory.js
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import TiuDe from "../components/TiuDe";

const ListCategory = () => {
    const navigation = useNavigation();

    return (
        <>
            <TiuDe tie="Danh Mục:" />
            <View style={styles.container}>
                <TouchableOpacity style={styles.item} onPress={() => console.log('Button 1 pressed')}>
                    <Image source={require('../../asset/taicho.png')} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TableSelection')}>
                    <Image source={require('../../asset/mangve.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
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
    }
});

export default ListCategory;
