// app/(tabs)/audio.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Audio() {
  const [recording, setRecording] = useState(false);

  const toggleRecording = async () => {
    // placeholder: use expo-av or MediaRecorder + upload
    setRecording(!recording);
    Alert.alert(recording ? 'Stopped' : 'Recording', 'Audio capture toggled (implement).');
  };

  const requestDropIn = () => {
    // placeholder: request live stream via WebRTC/Twilio
    Alert.alert('Request Drop-in', 'Request sent to contacts (implement).');
  };

  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Live Audio</Text>
      <TouchableOpacity style={styles.recordBtn} onPress={toggleRecording}>
        <Ionicons name={recording ? 'stop' : 'mic'} size={36} color="#fff" />
        <Text style={styles.btnText}>{recording ? 'Stop' : 'Record'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropBtn} onPress={requestDropIn}>
        <Text style={styles.dropText}>Request Live Drop-In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, paddingHorizontal: 20 },
  title: { color: '#F3F3F3', fontSize: 20, marginBottom: 20 },
  recordBtn: { alignItems: 'center', justifyContent: 'center', marginTop: 30 },
  btnText: { color: '#F3F3F3', marginTop: 8 },
  dropBtn: { marginTop: 30, padding: 12, borderRadius: 8, backgroundColor: '#0E0E0E', alignItems: 'center' },
  dropText: { color: '#F9624F' },
});
