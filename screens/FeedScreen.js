import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
const marinas = [
    {id: 1, name: "Blue Beacon Marina", lake: "Lake Couchiching / Lake Simcoe" },
    { id: 2, name: "Bridgeport Marina", lake: "Lake Couchiching" },
    { id: 3, name: "Port of Orillia", lake: "Lake Couchiching" },
]
const posts = [
  { id: 1, initial: 'T', name: 'Tom B.', type: 'CHECK', description: 'Conditions: GREAT', detail: 'Just now · Blue Beacon Marina', avatarColor: '#0EA5E9' },
  { id: 2, initial: 'M', name: 'Mike R.', type: 'TRIP', description: 'Logged a 4hr trip · 14.2 mi', detail: '2h ago · Bass Cove', avatarColor: '#8B5CF6' },
  { id: 3, initial: 'S', name: 'Sarah T.', type: 'CATCH', description: 'Caught a Striped Bass · 11 lbs', detail: '5h ago · North Channel', avatarColor: '#10B981' },
  { id: 4, initial: 'J', name: 'Jake M.', type: 'TRIP', description: 'Logged a 2hr trip · 8.4 mi', detail: 'Yesterday · Lake Simcoe', avatarColor: '#8B5CF6' },
  { id: 5, initial: 'R', name: 'Rachel K.', type: 'CHECK', description: 'Conditions: MIXED', detail: 'Yesterday · Bridgeport Marina', avatarColor: '#0EA5E9' },
];

const typeColors = {
  CHECK: { bg: '#E0F2FE', text: '#0369A1' },
  TRIP: { bg: '#EDE9FE', text: '#6D28D9' },
  CATCH: { bg: '#D1FAE5', text: '#065F46' },
};

export default function FeedScreen() {
  const [filter, setFilter] = useState('All');
  const [likes, setLikes] = useState({});
  const [selectedMarina, setSelectedMarina] = useState(marinas[0]);
  const [showPicker, setShowPicker] = useState(false);

  const filters = ['All', 'Trips', 'Catches', 'Check-ins'];

  const filteredPosts = posts.filter(post => {
    if (filter === 'All') return true;
    if (filter === 'Trips') return post.type === 'TRIP';
    if (filter === 'Catches') return post.type === 'CATCH';
    if (filter === 'Check-ins') return post.type === 'CHECK';
  });

  const toggleLike = (id) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={{ height: 50 }} />
      <View style={styles.header}>
  <Text style={styles.logo}>Aftly</Text>
  <TouchableOpacity
    style={styles.marinaPicker}
    onPress={() => setShowPicker(!showPicker)}>
    <Text style={styles.marinaPickerText}>{selectedMarina.name}</Text>
    <Text style={styles.marinaPickerArrow}>{showPicker ? '▲' : '▼'}</Text>
  </TouchableOpacity>
</View>

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

      {/* Filter Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
        {filters.map(f => (
          <TouchableOpacity
            key={f}
            style={[styles.filterTab, filter === f && styles.filterTabActive]}
            onPress={() => setFilter(f)}>
            <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Posts */}
      {filteredPosts.map(post => (
        <View key={post.id} style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={[styles.avatar, { backgroundColor: post.avatarColor }]}>
              <Text style={styles.avatarText}>{post.initial}</Text>
            </View>
            <View style={styles.postMeta}>
              <Text style={styles.postName}>{post.name}</Text>
              <Text style={styles.postDetail}>{post.detail}</Text>
            </View>
            <View style={[styles.typePill, { backgroundColor: typeColors[post.type].bg }]}>
              <Text style={[styles.typeText, { color: typeColors[post.type].text }]}>{post.type}</Text>
            </View>
          </View>

          <Text style={styles.postDescription}>{post.description}</Text>

          {post.type === 'CATCH' && (
            <View style={styles.photoPlaceholder}>
              <Text style={styles.photoPlaceholderText}>📷 Photo</Text>
            </View>
          )}

          <TouchableOpacity style={styles.likeButton} onPress={() => toggleLike(post.id)}>
            <Text style={styles.likeText}>{likes[post.id] ? '⚓ Anchored' : '⚓ Anchor'}</Text>
          </TouchableOpacity>
        </View>
      ))}
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
  filterRow: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterTab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
  },
  filterTabActive: {
    backgroundColor: '#0EA5E9',
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  postCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  postMeta: {
    flex: 1,
  },
  postName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  postDetail: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  typePill: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  typeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  postDescription: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 12,
  },
  photoPlaceholder: {
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  photoPlaceholderText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  likeButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  likeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
  },
});