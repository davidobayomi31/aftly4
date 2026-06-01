import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/FeedScreen';
import LogScreen from './screens/LogScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions= {{
          tabBarActiveTintColor: '#0EA5E9',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: {borderTopColor: '#F0F0F0'},
          headerShown: false,
        }}>
        <Tab.Screen name = "Home" component = {HomeScreen}/>
        <Tab.Screen name = "Feed" component = {FeedScreen}/>
        <Tab.Screen name = "Log" component = {LogScreen}/>


        </Tab.Navigator>
    </NavigationContainer>
    
  )
}