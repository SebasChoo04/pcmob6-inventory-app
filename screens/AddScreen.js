import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView, SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function AddScreen({ navigation, route }) {
  
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (route.params?.image) {
      const image = route.params.image
      setPhoto(image);
    }
  }, [route.params?.image])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}> Photo </Text>
        <TouchableOpacity style={{ margin: 20 }} onPress={() => navigation.navigate("Camera")}>
          { photo === null ? <FontAwesome name="plus" size={40} color="blue"/> : <Image style={styles.image} source={{uri: photo.uri}}/>}
        </TouchableOpacity>

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
            onPress={() => navigation.navigate("Inventory", { newItem: { name: name, count: count, uri: photo.uri } })}
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white" ,
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
  image: {
    width: 300,
    height: 300,
  }
});
