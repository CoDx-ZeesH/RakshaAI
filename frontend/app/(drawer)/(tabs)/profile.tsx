import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Profile() {
  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Name: Mohammad Zeeshan</Text>
      <Text style={styles.text}>Email: mohammad.zeeshan.tech@gmail.com</Text>
      <Text style={[styles.text, { marginTop: 10, color: '#B5B5B5' }]}>
        Manage account, security preferences, and consent options.
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'flex-start', justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, color: '#F3F3F3', marginBottom: 12 },
  text: { color: '#F3F3F3', fontSize: 16 },
});
