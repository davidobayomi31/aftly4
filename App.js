import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
// homescreen
function HomeScreen(){
  return (
    <View style = {styles.screen}> 
    {/* Header */}
    
      <Text style = {styles.title}>Marina Card</Text>
    </View>
  );
}
//feed
function FeedScreen(){
  return (
    <View style = {styles.screen}>
      <Text style={styles.title}>Marina Feed</Text>
    </View>
  );
} 
//where users log there trip
function LogScreen () {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Log a Trip </Text>
    </View>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#0EA5E9',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle:{ borderTopColor: '#F0F0F0'},
          headerShown: false,
        }}> 
        <Tab.Screen name = "Home" component ={HomeScreen} />
        <Tab.Screen name = "Feed" component = {FeedScreen} />
        <Tab.Screen name = "log" component = {LogScreen} />

        </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    fontsize: 24, 
    fontWeight: 'bold',
    color: '#111827',
  },
})



