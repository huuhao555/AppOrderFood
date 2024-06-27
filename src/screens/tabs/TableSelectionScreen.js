import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import SCREENS from '..';

const TableSelectionScreen = ({ navigation }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [tables, setTables] = useState(Array.from({ length: 20 }, (_, i) => ({
    name: `Bàn ${i + 1}`,
    isSelected: false,
  })));

  const toggleTable = (index) => {
    const updatedTables = tables.map((table, idx) => ({
      ...table,
      isSelected: idx === index ? !table.isSelected : table.isSelected,
    }));
    setTables(updatedTables);
    setSelectedTable(updatedTables[index]);
  };

  const handleConfirm = () => {
    if (selectedTable) {
      navigation.navigate(SCREENS.PRODUCTLIST);
    } else {
      alert('Vui lòng chọn một bàn trước khi xác nhận.');
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Chọn Bàn</Text>
      <FlatList
        data={tables}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.tableButton,
              item.isSelected && styles.selectedTableButton
            ]}
            onPress={() => toggleTable(index)}
          >
            <Text style={styles.tableText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.tablesContainer}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
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
    backgroundColor: 'lightsalmon',
    borderColor: 'lightsalmon',
  },
  tableText: {
    fontSize: 16,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TableSelectionScreen;
