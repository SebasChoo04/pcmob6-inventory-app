import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InventoryStack from './screens/InventoryStack';
import SettingsStack from './screens/SettingsStack';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name){
              case "Inventory":
                iconName = "inbox"
                break
              case "Settings":
                iconName = "gear"
                break
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Inventory" component={InventoryStack}/>
        <Tab.Screen name="Settings" component={SettingsStack}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}