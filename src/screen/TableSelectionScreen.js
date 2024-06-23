import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const TableSelectionScreen = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const tables = Array.from({ length: 20 }, (_, i) => `Bàn ${i + 1}`);

  const toggleTable = (table) => {
    setSelectedTable(table);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chọn Bàn</Text>
      <FlatList
        data={tables}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.tableButton,
              selectedTable === item && styles.selectedTableButton
            ]}
            onPress={() => toggleTable(item)}
          >
            <Text style={styles.tableText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.tablesContainer}
      />
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Xác Nhận</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tablesContainer: {
    alignItems: 'center',
  },
  tableButton: {
    width: 100,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    margin: 10,
  },
  selectedTableButton: {
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
  },
  tableText: {
    fontSize: 16,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TableSelectionScreen;
