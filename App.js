import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { view, Text,StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
// homescreen
function HomeScreen(){
  return (
    <View style = {style.screen}> 
      <Text style = {styles.title}>Marina Card</Text>
    </View>
  );
}
//feed
function FeedScreen(){
  return (
    <view style = {style.screen}>
      <Text style={styles.title}>Marina Feed</Text>
    </view>
  );
} 
//where users log there trip
function LogScreen () {
  return (
    <view style={styles.screen}>
      <Text style={styles.title}>Log a Trip </Text>
    </view>
  );
}

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActivateTintColor: '#0EA5E9',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle:{ borderTopColor: '#F0F0F0'},
          headerShown: false,
        }}> 
        <Tab.Screen name = "Home" component ={HomeScreen} />
        <Tab.Screen name = "Feed" componet = {FeedScreen} />
        <Tab.Screen name = "log" component = {LogScreen} />

        </Tab.Navigator>

    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    fontsize: 24, 
    fontweight: bold,
    color: '111827',
  },
})



