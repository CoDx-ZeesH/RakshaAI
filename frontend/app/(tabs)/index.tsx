import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import LoadingScreen from '../../screens/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState('Location sharing active');

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleSOS = () => {
    setStatus('🚨 SOS Triggered!');
    setTimeout(() => setStatus('Location sharing active'), 3000);
  };

  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, Zeeshan 👋</Text>
        <View style={styles.iconGroup}>
          <Ionicons name="location-outline" size={22} color="#F3F3F3" />
          <Ionicons name="sunny-outline" size={22} color="#FBBF24" style={{ marginLeft: 10 }} />
        </View>
      </View>

      {/* SOS Button */}
      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
        <TouchableOpacity onPress={handleSOS} activeOpacity={0.8}>
          <LinearGradient colors={['#FF6B4A', '#F9624F']} style={styles.sosButton}>
            <Text style={styles.sosText}>SOS</Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <View style={styles.iconCard}>
          <Ionicons name="navigate-circle-outline" size={28} color="#F3F3F3" />
          <Text style={styles.iconLabel}>Share Location</Text>
        </View>
        <View style={styles.iconCard}>
          <MaterialIcons name="contact-phone" size={28} color="#F3F3F3" />
          <Text style={styles.iconLabel}>Contacts</Text>
        </View>
        <View style={styles.iconCard}>
          <Ionicons name="settings-outline" size={28} color="#F3F3F3" />
          <Text style={styles.iconLabel}>Settings</Text>
        </View>
      </View>

      {/* Status */}
      <View style={styles.statusBox}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingTop: 80, paddingBottom: 40,
  },
  header: {
    width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  headerText: { color: '#F3F3F3', fontSize: 20, fontFamily: 'Poppins' },
  iconGroup: { flexDirection: 'row', alignItems: 'center' },
  sosButton: {
    width: 220, height: 220, borderRadius: 110, alignItems: 'center', justifyContent: 'center',
    shadowColor: '#F9624F', shadowOpacity: 0.8, shadowRadius: 20, elevation: 10,
  },
  sosText: { color: '#fff', fontSize: 48, fontWeight: 'bold' },
  quickActions: {
    flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 40,
  },
  iconCard: { alignItems: 'center' },
  iconLabel: { color: '#B5B5B5', fontSize: 12, marginTop: 8, fontFamily: 'Poppins' },
  statusBox: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  statusDot: {
    width: 10, height: 10, borderRadius: 5, backgroundColor: '#6EE7B7', marginRight: 8,
  },
  statusText: { color: '#F3F3F3', fontFamily: 'Poppins' },
});
