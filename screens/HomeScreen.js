import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

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
    mechanic: true,
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
    mechanic: true,
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
    mechanic: false,
  },
];

export default function HomeScreen() {
  const [selectedMarina, setSelectedMarina] = useState(marinas[0]);
  const [showPicker, setShowPicker] = useState(false);

  const weekForecast = [
    { day: 'Mon', status: 'good' },
    { day: 'Tue', status: 'good' },
    { day: 'Wed', status: 'rough' },
    { day: 'Thu', status: 'mixed' },
    { day: 'Fri', status: 'good' },
    { day: 'Sat', status: 'good' },
    { day: 'Sun', status: 'mixed' },
  ];

  return (
    <ScrollView style={styles.screen}>
      <View style={{height: 50}}/>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Aftly</Text>
        <TouchableOpacity
            style={styles.marinaPicker}
            onPress={()=>setShowPicker(!showPicker)}>
            <Text style={styles.marinaPickerText}>{selectedMarina.name}</Text>
            <Text style={styles.marinaPickerArrow}>{showPicker ? '▲' : '▼'}</Text>
            </TouchableOpacity>
      </View>

      {/* Alert Banner */}
      <View style={styles.alertBanner}>
        <Text style={styles.alertText}>⚠️ Low water levels reported near the Narrows</Text>
      </View>

      {/* Dropdown picker */}
      {showPicker && (
        <View style={styles.picker}>
          {marinas.map((marina) => (
            <TouchableOpacity
              key={marina.id}
              style={styles.pickerItem}
              onPress={() => {
                setSelectedMarina(marina);
                setShowPicker(false);
              }}>
              <Text style={styles.pickerText}>{marina.name}</Text>
              <Text style={styles.pickerSub}>{marina.lake}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Marina Info Card */}
      <View style={styles.marinaCard}>
        {selectedMarina.id === 1 && (
          <View style={styles.featuredPill}>
            <Text style={styles.featuredText}>⭐ Featured</Text>
          </View>
        )}
        <Text style={styles.marinaCardName}>{selectedMarina.name}</Text>
        <Text style={styles.marinaCardDetail}>🌊 {selectedMarina.lake}</Text>
        <Text style={styles.marinaCardDetail}>📍 {selectedMarina.address}</Text>
        <Text style={styles.marinaCardDetail}>📞 {selectedMarina.phone}</Text>
        <View style={styles.badgeRow}>
          {selectedMarina.gas && <View style={styles.badge}><Text style={styles.badgeText}>Gas</Text></View>}
          {selectedMarina.pumpOut && <View style={styles.badge}><Text style={styles.badgeText}>Pump-Out</Text></View>}
          {selectedMarina.electricity && <View style={styles.badge}><Text style={styles.badgeText}>Hydro</Text></View>}
          {selectedMarina.mechanic && <View style={styles.badge}><Text style={styles.badgeText}>Mechanic</Text></View>}
        </View>
        <TouchableOpacity style={styles.directionsButton}>
          <Text style={styles.directionsText}>🧭 Get Directions</Text>
        </TouchableOpacity>
      </View>

      {/* Live Conditions Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Live Conditions</Text>
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

      {/* This Week at the Dock */}
      <View style={styles.weekCard}>
        <Text style={styles.cardTitle}>This Week at the Dock</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.weekStrip}>
          {weekForecast.map((item) => (
            <View key={item.day} style={[
              styles.dayCard,
              item.status === 'good' && { backgroundColor: '#D1FAE5' },
              item.status === 'mixed' && { backgroundColor: '#FEF3C7' },
              item.status === 'rough' && { backgroundColor: '#FEE2E2' },
            ]}>
              <Text style={styles.dayLabel}>{item.day}</Text>
              <Text style={styles.dayEmoji}>
                {item.status === 'good' ? '⛵' : item.status === 'mixed' ? '〰️' : '⚠️'}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  alertBanner: {
    backgroundColor: '#FEF3C7',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FDE68A',
  },
  alertText: {
    fontSize: 13,
    color: '#92400E',
    fontWeight: '500',
  },
  marinaCard: {
    margin: 16,
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  featuredPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#FEF3C7',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  featuredText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
  },
  marinaCardName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  marinaCardDetail: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  directionsButton: {
    backgroundColor: '#0EA5E9',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  directionsText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  card: {
    margin: 16,
    marginTop: 0,
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
  picker: {
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    
  },
  pickerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  pickerText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  pickerSub: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#E0F2FE',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0EA5E9',
  },
  weekCard: {
    margin: 16,
    marginTop: 0,
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  weekStrip: {
    marginTop: 12,
  },
  dayCard: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 12,
    marginRight: 8,
    width: 60,
  },
  dayLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  dayEmoji: {
    fontSize: 20,
  },
  marinaPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 8,
  },
  marinaPickerText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
 },
  marinaPickerArrow: {
    fontSize: 16,
    color: '#6B7280',
},
});