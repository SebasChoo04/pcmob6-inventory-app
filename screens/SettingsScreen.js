import React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { lightModeAction, darkModeAction } from "../redux/ducks/accountPref";

export default function SettingsScreen({ navigation }) {

  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const dispatch = useDispatch();

  function switchMode() {
    isDark ? dispatch(lightModeAction()) : dispatch(darkModeAction())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Current Dark Mode is {JSON.stringify(isDark)} </Text>
      <Switch value={isDark} onValueChange={switchMode}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center"
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    color: "grey",
  }
})