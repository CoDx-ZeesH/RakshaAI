// app/(tabs)/nudges.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Nudges() {
  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Safety Nudges</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Walk Home ETA</Text>
        <Text style={styles.value}>Share ETA with trusted contacts?</Text>
        <TouchableOpacity style={styles.shareBtn} onPress={() => alert('Share ETA (implement)')}>
          <Text style={{ color: '#fff' }}>Share ETA</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { marginTop: 12 }]}>
        <Text style={styles.label}>Route Safety</Text>
        <Text style={styles.value}>Route A (low light) → Route B (better lit)</Text>
        <TouchableOpacity style={styles.shareBtn} onPress={() => alert('Open map (implement)')}>
          <Text style={{ color: '#fff' }}>Open Route</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 20 },
  title: { color: '#F3F3F3', fontSize: 20, marginBottom: 12 },
  card: { backgroundColor: '#0E0E0E', padding: 12, borderRadius: 10 },
  label: { color: '#B5B5B5' },
  value: { color: '#F3F3F3', fontWeight: '600', marginVertical: 8 },
  shareBtn: { backgroundColor: '#FF6B4A', padding: 10, borderRadius: 8, alignItems: 'center' },
});
