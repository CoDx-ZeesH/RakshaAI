// app/(tabs)/breadcrumb.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const sampleTrail = [
  { id: '1', time: '10:01', coords: '26.4500,80.3500' },
  { id: '2', time: '10:03', coords: '26.4508,80.3506' },
  { id: '3', time: '10:05', coords: '26.4514,80.3512' },
];

export default function Breadcrumb() {
  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Live breadcrumb trail</Text>
      <View style={styles.mapPlaceholder}>
        <Text style={{ color: '#B5B5B5' }}>[Map view placeholder — integrate Mapbox/Google here]</Text>
      </View>

      <FlatList
        data={sampleTrail}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.coords}>{item.coords}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 16 },
  title: { color: '#F3F3F3', fontSize: 20, marginBottom: 12 },
  mapPlaceholder: { height: 240, borderRadius: 12, backgroundColor: '#0E0E0E', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomColor: '#222', borderBottomWidth: 1 },
  time: { color: '#B5B5B5' },
  coords: { color: '#F3F3F3' },
});
