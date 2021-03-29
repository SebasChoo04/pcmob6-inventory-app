import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function InventoryScreen({ navigation, route }) {
  
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addItem}>
          <FontAwesome name="plus-circle" size={32} style={{ marginRight: 10 }}/>
        </TouchableOpacity>
      )
    })
  }, []);

  useEffect(() => {
    if (route.params?.newItem) {
      const newItem = {...route.params?.newItem, id: inventory.length}
      setInventory([...inventory, newItem])
      console.log(inventory)
    }
  }, [route.params?.newItem])

  function addItem(){
    navigation.navigate("Add")
  }

  function renderInventory({ item }) {
    return (
      <View style={styles.list}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{uri: item.uri}} style={{ width: 50, height: 50 }}/>
          <Text style={styles.title}>
            {item.name}
          </Text>
        </View>
        <Text style={styles.count}>
          {item.count}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList data={inventory} renderItem={renderInventory} style={{ width: "100%" }} keyExtractor={(item) => item.id.toString()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  list: {
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10
  }, 
  count: {
    fontSize: 20,
    fontWeight: "500"
  }
});