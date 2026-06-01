import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function LogScreen() {
  const [tripType, setTripType] = useState(null);
  const [condition, setCondition] = useState(null);

  return (
    <ScrollView style={styles.screen}>
      <View style={{ height: 50 }} />
      <View style={styles.header}>
        <Text style={styles.logo}>Aftly</Text>
        <Text style={styles.headerSub}>Log a Trip</Text>
      </View>

      {/* Trip Type */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What are you logging?</Text>
        <View style={styles.typeRow}>
          {['TRIP', 'CATCH', 'CHECK'].map(type => (
            <TouchableOpacity
              key={type}
              style={[styles.typeButton, tripType === type && styles.typeButtonActive]}
              onPress={() => setTripType(type)}>
              <Text style={styles.typeEmoji}>
                {type === 'TRIP' ? '⛵' : type === 'CATCH' ? '🎣' : '📍'}
              </Text>
              <Text style={[styles.typeLabel, tripType === type && styles.typeLabelActive]}>
                {type === 'TRIP' ? 'Trip' : type === 'CATCH' ? 'Catch' : 'Check-in'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Conditions */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>How were the conditions?</Text>
        <View style={styles.conditionRow}>
          {['GREAT', 'MIXED', 'ROUGH'].map(c => (
            <TouchableOpacity
              key={c}
              style={[
                styles.conditionButton,
                condition === c && styles.conditionButtonActive,
                c === 'GREAT' && { borderColor: '#10B981' },
                c === 'MIXED' && { borderColor: '#F59E0B' },
                c === 'ROUGH' && { borderColor: '#EF4444' },
                condition === c && c === 'GREAT' && { backgroundColor: '#D1FAE5' },
                condition === c && c === 'MIXED' && { backgroundColor: '#FEF3C7' },
                condition === c && c === 'ROUGH' && { backgroundColor: '#FEE2E2' },
              ]}
              onPress={() => setCondition(c)}>
              <Text style={styles.conditionText}>
                {c === 'GREAT' ? '😎' : c === 'MIXED' ? '😐' : '🌊'} {c}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Post to Dock Feed</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
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
  headerSub: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 2,
  },
  card: {
    margin: 16,
    marginBottom: 0,
    padding: 20,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  typeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  typeButtonActive: {
    borderColor: '#0EA5E9',
    backgroundColor: '#E0F2FE',
  },
  typeEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  typeLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  typeLabelActive: {
    color: '#0EA5E9',
  },
  conditionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conditionButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    marginHorizontal: 4,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    borderWidth: 2,
  },
  conditionText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#374151',
  },
  submitButton: {
    margin: 16,
    marginTop: 24,
    backgroundColor: '#0EA5E9',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});