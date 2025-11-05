import React, { useState, useRef, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native'; // 👈 Import for Drawer control
import LoadingScreen from '../../../screens/LoadingScreen';

export default function Home() {
  const navigation = useNavigation(); // 👈 get navigation object
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('Location sharing active');
  const pressTimer = useRef<number | null>(null);

  // 👇 Set up the header with a hamburger icon
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{ marginLeft: 12 }}>
          <Ionicons name="menu-outline" size={28} color="#F3F3F3" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const sendSOS = async (mode: 'tap' | 'hold' | 'silent') => {
    setIsLoading(true);
    setStatus('Sending SOS...');
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus('SOS sent — contacts notified');
      Alert.alert('SOS Sent', 'Multimodal alert dispatched to your contacts.');
    } catch (err) {
      setStatus('Failed to send SOS');
      Alert.alert('Error', 'Failed to send SOS. Check connection.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus('Location sharing active'), 3000);
    }
  };

  const onPressIn = () => {
    pressTimer.current = setTimeout(() => sendSOS('hold') as unknown as number, 2000) as unknown as number;
  };
  const onPressOut = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
      sendSOS('tap');
    }
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, Zeeshan 👋</Text>
        <Ionicons name="location-outline" size={22} color="#F3F3F3" />
      </View>

      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} android_ripple={{ color: '#00000022' }} style={styles.pressWrap}>
          <LinearGradient colors={['#FF6B4A', '#F9624F']} style={styles.sosButton}>
            <Text style={styles.sosText}>SOS</Text>
            <Text style={styles.hintText}>Tap or hold to escalate</Text>
          </LinearGradient>
        </Pressable>
      </Animatable.View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.smallAction}
          onPress={() => navigation.navigate('(drawer)/breadcrumb' as never)}
        >
          <Ionicons name="navigate-circle-outline" size={28} color="#F3F3F3" />
          <Text style={styles.iconLabel}>Trail</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.smallAction}
          onPress={() => navigation.navigate('(drawer)/workflows' as never)}
        >
          <Ionicons name="sync-circle-outline" size={28} color="#F3F3F3" />
          <Text style={styles.iconLabel}>Workflows</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.smallAction}
          onPress={() => navigation.navigate('(drawer)/verify' as never)}
        >
          <Ionicons name="eye-outline" size={28} color="#F3F3F3" />
          <Text style={styles.iconLabel}>Verify</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusBox}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingTop: 70, paddingBottom: 36 },
  header: { width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerText: { color: '#F3F3F3', fontSize: 20, fontFamily: 'Poppins' },
  pressWrap: { alignItems: 'center', justifyContent: 'center' },
  sosButton: { width: 220, height: 220, borderRadius: 110, alignItems: 'center', justifyContent: 'center', elevation: 10 },
  sosText: { color: '#fff', fontSize: 48, fontWeight: 'bold' },
  hintText: { color: '#F3F3F3', fontSize: 12, marginTop: 6 },
  quickActions: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 20 },
  smallAction: { alignItems: 'center' },
  iconLabel: { color: '#B5B5B5', fontSize: 12, marginTop: 8 },
  statusBox: { flexDirection: 'row', alignItems: 'center' },
  statusDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#6EE7B7', marginRight: 8 },
  statusText: { color: '#F3F3F3' },
});
