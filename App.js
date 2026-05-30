import { useState } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,StyleSheet,ScrollView, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const marinas = [
  {
    id: 1,
    name: "Blue Beacon Marina",
    lake: "Lake Couchiching / Lake Simcoe",
    address: "693 Atherley Road, Orillia, ON",
    phone: "705-325-2526",
    lat: 44.6022,
    lng: -79.4047,
    gas: true,
    pumpOut: true,
    electricity: true,
    showers: false,
    wifi: false,
    launchRamp: false,
    restaurant: false,
    priceRange: "$$$",
  },
  {
    id: 2,
    name: "Bridgeport Marina",
    lake: "Lake Couchiching",
    address: "434 Couchiching Point Rd, Orillia, ON",
    phone: "705-326-7898",
    lat: 44.5988,
    lng: -79.4063,
    gas: true,
    pumpOut: true,
    electricity: true,
    showers: true,
    wifi: false,
    launchRamp: false,
    restaurant: false,
    priceRange: "$$",
  },
  {
    id: 3,
    name: "Port of Orillia",
    lake: "Lake Couchiching",
    address: "50 Centennial Drive, Orillia, ON",
    phone: "705-326-6314",
    lat: 44.6090,
    lng: -79.4198,
    gas: false,
    pumpOut: false,
    electricity: true,
    showers: true,
    wifi: true,
    launchRamp: false,
    restaurant: false,
    priceRange: "$",
  },
];
// home screen
function HomeScreen(){
  const [selectedMarina, setSelectedMarina] = useState(marinas[0]);
  const [showPicker,setShowPicker] = useState(false);

  return (
    <View style = {styles.screen}> 
      <View style={{height:50}}/>
    {/* Header */}
    <View style={styles.header}>
      <Text style = {styles.logo}>Aftly</Text>
      <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
        <Text style={styles.marinaName}>{selectedMarina.name} ▾</Text>
      </TouchableOpacity>
    </View>
    {/* Marina Card*/}
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Live Conditions</Text>
      <Text style={styles.cardSub}>Blue Beacon Marina</Text>
      <View style={styles.grid}>
        <View style={styles.gridItem}>
          <Text style={styles.gridValue}>12 km/h</Text>
          <Text style={styles.gridLabel}>Wind</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridValue}>18°C</Text>
          <Text style={styles.gridLabel}>Water Temp</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridValue}>Rising</Text>
          <Text style={styles.gridLabel}>Tide</Text>
        </View>
        <View style={styles.gridItem}>
          <Text style={styles.gridValue}>6:02 AM</Text>
          <Text style={styles.gridLabel}>Sunrise</Text>
        </View>
      </View>
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
  
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#111827',
  },
  
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 16,
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
  card: {
    margin: 16,
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  cardSub: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 4,
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '50%',
    paddingVertical: 12,
  },
  gridValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0EA5E9',
  },
  gridLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  }
)



