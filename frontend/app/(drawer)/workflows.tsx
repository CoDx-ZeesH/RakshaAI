// app/(tabs)/workflows.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const sample = [
  { id: '1', label: 'Immediate: Family', detail: 'SMS + Push' },
  { id: '2', label: 'If no response (2 min): Local responder', detail: 'Call' },
  { id: '3', label: 'If no response (5 min): Authorities', detail: 'Call & SMS' },
];

export default function Workflows() {
  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Escalation Workflows</Text>
      <FlatList data={sample} keyExtractor={(i) => i.id} renderItem={({ item }) => (
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.detail}>{item.detail}</Text>
          </View>
          <TouchableOpacity onPress={() => Alert.alert('Edit', 'Edit workflow (implement)')}>
            <Text style={{ color: '#F9624F' }}>Edit</Text>
          </TouchableOpacity>
        </View>
      )} />
      <TouchableOpacity style={styles.addBtn} onPress={() => Alert.alert('Add', 'Add new workflow (implement)')}>
        <Text style={{ color: '#fff' }}>Add Workflow</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10, paddingHorizontal: 20,paddingBottom:40 },
  title: { color: '#F3F3F3', fontSize: 20, marginBottom: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomColor: '#222', borderBottomWidth: 1 },
  label: { color: '#F3F3F3', fontWeight: '600' },
  detail: { color: '#B5B5B5' },
  addBtn: { backgroundColor: '#FF6B4A', padding: 12, borderRadius: 8, alignItems: 'center' },
});
