import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function AddScreen({ navigation }) {
  
  const [name, setName] = useState("");
  const [count, setCount] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>



      <Text style={{ fontSize: 24 }}> Item Name </Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={(input) => setName(input)}
      />

      <Text style={{ fontSize: 24, marginTop: 15 }}> Count </Text>
      <TextInput
        style={styles.textInput}
        value={count}
        keyboardType="number-pad"
        onChangeText={(input) => setCount(input)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Inventory", { newItem: { name: name, count: count } })}
        >
          <Text style={[styles.buttonText, { color: "black"}]}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 80,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
