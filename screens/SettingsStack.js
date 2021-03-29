import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';

const InnerStack =  createStackNavigator();

export default function InventoryStack(){
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen name="Inventory" component={SettingsScreen} options={{
        title: "Settings",
        headerStyle: {
          backgroundColor: "white",
          height: 100,
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
        },
      }}/>
    </InnerStack.Navigator>
  );
}