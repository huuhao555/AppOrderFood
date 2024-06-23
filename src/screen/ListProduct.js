import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import TiuDe from "../components/TiuDe";

const ListProduct = () => {
    const listPro = [
        { id: 1, name: 'TS01' },
        { id: 2, name: 'TS02' },
        { id: 3, name: 'TS03' },
        { id: 4, name: 'TS04' },
        { id: 5, name: 'TS05' },
        { id: 6, name: 'TS06' },
        { id: 7, name: 'TS07' },
    ];

    return (
        <>
        <ScrollView>
            <TiuDe tie="Sản Phẩm:" />
            <View style={styles.container}>
                <FlatList
                    scrollEnabled={false}
                    data={listPro}
                    keyExtractor={item => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image source={require('../../asset/tradau.jpg')} style={{ width: '100%', height: 150 }} />
                            <View style={styles.name}>
                                <Text style={styles.name_text}>{item.name}</Text>
                            </View>
                        </View>
                    )}
                    
                />
            </View>
            </ScrollView>
        </>
        
    );
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    row: {
        flex:1,
        justifyContent:'space-between'
    },
    item: {
        width: '45%',
        marginBottom: 10
    },
    name: {
        backgroundColor: '#515458',
        paddingVertical: 4
    },
    name_text: {
        color: 'white',
        textAlign: 'center'
    }
});

export default ListProduct;

