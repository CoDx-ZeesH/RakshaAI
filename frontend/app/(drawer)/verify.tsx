// app/(tabs)/verify.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default function Verify() {
  const score = 0.78; // placeholder, compute on-device or server
  const signals = [
    { id: 'audio', label: 'Audio energy', value: 0.7 },
    { id: 'accel', label: 'Accelerometer spike', value: 0.9 },
    { id: 'movement', label: 'Rapid location change', value: 0.4 },
  ];

  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>AI Verification</Text>

      <Animatable.Text animation="zoomIn" style={styles.scoreText}>
        {Math.round(score * 100)}%
      </Animatable.Text>

      <View style={styles.card}>
        {signals.map((s) => (
          <View key={s.id} style={styles.row}>
            <Text style={styles.label}>{s.label}</Text>
            <Text style={styles.value}>{Math.round(s.value * 100)}%</Text>
          </View>
        ))}
      </View>

      <Text style={styles.note}>
        Verification combines on-device audio + sensor rules. Higher score suggests higher likelihood of genuine distress.
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 20 },
  title: { color: '#F3F3F3', fontSize: 18, marginBottom: 12 },
  scoreText: { color: '#FF6B4A', fontSize: 56, fontWeight: '700', textAlign: 'center', marginVertical: 12 },
  card: { backgroundColor: '#0E0E0E', borderRadius: 10, padding: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8 },
  label: { color: '#B5B5B5' },
  value: { color: '#F3F3F3', fontWeight: '600' },
  note: { color: '#B5B5B5', marginTop: 16 },
});
