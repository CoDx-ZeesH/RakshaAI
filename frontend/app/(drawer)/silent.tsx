// app/(tabs)/silent.tsx
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SilentSettings() {
  const [volumeTrigger, setVolumeTrigger] = useState(true);
  const [shakeTrigger, setShakeTrigger] = useState(false);
  const [powerTrigger, setPowerTrigger] = useState(false);

  const toggle = (setter: (v: boolean) => void, value: boolean, name: string) => {
    setter(!value);
    Alert.alert(`${name} ${!value ? 'enabled' : 'disabled'}`, 'Test in controlled environment.');
  };

  return (
    <LinearGradient colors={['#121212', '#1E1E1E']} style={styles.container}>
      <Text style={styles.title}>Silent SOS Triggers</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Volume button pattern</Text>
        <Switch value={volumeTrigger} onValueChange={() => toggle(setVolumeTrigger, volumeTrigger, 'Volume trigger')} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Shake phone</Text>
        <Switch value={shakeTrigger} onValueChange={() => toggle(setShakeTrigger, shakeTrigger, 'Shake trigger')} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Power button pattern</Text>
        <Switch value={powerTrigger} onValueChange={() => toggle(setPowerTrigger, powerTrigger, 'Power trigger')} />
      </View>

      <Text style={styles.note}>
        Note: Android supports low-level button listening more easily via foreground services. For iOS, platform limits apply.
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 80 },
  title: { color: '#F3F3F3', fontSize: 22, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 12 },
  label: { color: '#E6E6E6' },
  note: { marginTop: 30, color: '#B5B5B5' },
});
