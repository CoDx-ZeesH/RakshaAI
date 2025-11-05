// app/(tabs)/incident.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Incident() {
  const incident = { label: 'Possible Fall', confidence: 0.82, reason: 'High vertical accel + no movement' };

  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Incident Detection</Text>

      <View style={styles.card}>
        <Text style={styles.label}>{incident.label}</Text>
        <Text style={styles.conf}>{Math.round(incident.confidence * 100)}%</Text>
        <Text style={styles.reason}>{incident.reason}</Text>
      </View>

      <TouchableOpacity style={styles.action} onPress={() => Alert.alert('Dispatch', 'Contact emergency services (implement).')}>
        <Text style={{ color: '#fff' }}>Call Emergency Services</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 20 },
  title: { color: '#F3F3F3', fontSize: 20, marginBottom: 16 },
  card: { backgroundColor: '#0E0E0E', padding: 14, borderRadius: 10 },
  label: { color: '#FF6B4A', fontSize: 18, fontWeight: '700' },
  conf: { color: '#F3F3F3', fontSize: 28, marginVertical: 6 },
  reason: { color: '#B5B5B5' },
  action: { marginTop: 20, padding: 12, borderRadius: 8, backgroundColor: '#F9624F', alignItems: 'center' },
});
