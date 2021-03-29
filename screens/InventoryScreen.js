import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function InventoryScreen({ navigation }) {
  
  const [inventory, setInventory] = useState();
  
  function addItem(){

  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addItem}>
          <FontAwesome name="plus-circle" size={32} style={{ marginRight: 10 }}/>
        </TouchableOpacity>
      )
    })
  }, [])


  return (
    <View style={styles.container}>
      <Text> Inventory </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});