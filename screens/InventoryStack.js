import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InventoryScreen from './InventoryScreen';

const InnerStack =  createStackNavigator();

export default function InventoryStack(){
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen name="Inventory" component={InventoryScreen} options={{
        title: "Inventory",
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