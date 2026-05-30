import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
// homescreen
function HomeScreen(){
  return (
    <View style = {styles.screen}> 
      <View style={{height:50}}/>
    {/* Header */}
    <View style={styles.header}>
      <Text style = {styles.logo}>Aftly</Text>
      <Text style= {styles.marinaName}>Blue Beacon Marina</Text>
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
  },
)



