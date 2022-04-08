import All from "./screens/all.js"
import Popular from "./screens/popular.js"
import Recomendations from "./screens/recomendations.js"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      

      <Tab.Navigator
      initialRouteName="All"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12, marginTop: 30},
        tabBarStyle: {backgroundColor: "#ffdd00"  },
      }}>
            
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Popular" component={Popular} />
        <Tab.Screen name="Recomends" component={Recomendations} />

      </Tab.Navigator>

    </NavigationContainer>
  );
}