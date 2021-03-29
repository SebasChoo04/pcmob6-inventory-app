import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InventoryScreen from './InventoryScreen';
import AddScreen from './AddScreen';
import CameraScreen from './CameraScreen';

const InnerStack =  createStackNavigator();

export default function InventoryStack(){
  return (
    <InnerStack.Navigator mode="modal">
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
      <InnerStack.Screen name="Add" component={AddScreen} options={{ headerShown: false}}/>
      <InnerStack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }}/>
    </InnerStack.Navigator>
  );
}