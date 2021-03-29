import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function SettingsScreen({ navigation }) {

const isDark = useSelector((state) => state.accountPrefs.isDark);

  return (
    <View style={styles.container}>
      <Text> Setting </Text>
      <Text> Current Dark Mode is {JSON.stringify(isDark)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
  }
})