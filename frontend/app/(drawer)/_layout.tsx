import { Drawer } from 'expo-router/drawer';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#121212',
          width: 260,
        },
        drawerActiveTintColor: '#F9624F',
        drawerInactiveTintColor: '#B5B5B5',
        headerStyle: { backgroundColor: '#121212' },
        headerTitleStyle: { color: '#F3F3F3' },
        drawerLabelStyle: { fontSize: 14, fontWeight: '500' },
      }}
    >
      {/* ⚡ Core Tabs (Main entry point inside drawer) */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Dashboard',
          headerShown: false,
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
        }}
      />

      {/* 🤫 Silent SOS */}
      <Drawer.Screen
        name="silent"
        options={{
          title: 'Silent SOS',
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="volume-off" size={size} color={color} />,
        }}
      />

      {/* 🧠 AI Verification */}
      <Drawer.Screen
        name="verify"
        options={{
          title: 'AI Verification',
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="brain" size={size} color={color} />,
        }}
      />

      {/* 🎙️ Audio Stream */}
      <Drawer.Screen
        name="audio"
        options={{
          title: 'Live Audio',
          drawerIcon: ({ color, size }) => <Ionicons name="mic-outline" size={size} color={color} />,
        }}
      />

      {/* 🚨 Incident */}
      <Drawer.Screen
        name="incident"
        options={{
          title: 'Incident Detection',
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="alert-decagram-outline" size={size} color={color} />,
        }}
      />

      {/* 🧍 Community */}
      <Drawer.Screen
        name="community"
        options={{
          title: 'Community Network',
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="account-group" size={size} color={color} />,
        }}
      />

      {/* 🔁 Workflows */}
      <Drawer.Screen
        name="workflows"
        options={{
          title: 'Workflows',
          drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="timeline-check" size={size} color={color} />,
        }}
      />

      {/* 🛣️ Nudges */}
      <Drawer.Screen
        name="nudges"
        options={{
          title: 'Safety Nudges',
          drawerIcon: ({ color, size }) => <Ionicons name="map-outline" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}
