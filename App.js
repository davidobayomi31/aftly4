import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.logo}>Aftly</Text>
        <Text style={styles.marina}>Blue Beacon Marina</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0EA5E9',
  },
  marina: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 2,
  },
});