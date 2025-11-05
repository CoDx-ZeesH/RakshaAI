// app/(tabs)/community.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const sample = [
  { id: '1', name: 'Asha (Volunteer)', dist: '0.3 km' },
  { id: '2', name: 'Campus Security', dist: '0.6 km' },
];

export default function Community() {
  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Nearby Responders</Text>
      <FlatList data={sample} keyExtractor={(i) => i.id} renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.dist}>{item.dist}</Text>
        </View>
      )} />
      <TouchableOpacity style={styles.joinBtn} onPress={() => alert('Sign up flow (implement)')}>
        <Text style={{ color: '#fff' }}>Join as Responder</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 20 },
  title: { color: '#F3F3F3', fontSize: 20, marginBottom: 14 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomColor: '#222', borderBottomWidth: 1 },
  name: { color: '#F3F3F3' },
  dist: { color: '#B5B5B5' },
  joinBtn: { marginTop: 20, backgroundColor: '#FF6B4A', padding: 12, borderRadius: 8, alignItems: 'center' },
});
