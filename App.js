import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
// homescreen
function HomeScreen(){
  return (
    <View style = {styles.screen}> 
    {/* Header */}
    <View style={styles.header}>

      <Text style = {styles.logo}>Aftly</Text>
      <Text style= {styles.marinaName}>Blue Beacon Marina</Text>
    </View>
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
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#111827',
  
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0EA5E9',
  },
  marinaName: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 2,
  },
  },
})



