import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F9624F',
        tabBarInactiveTintColor: '#B5B5B5',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopColor: '#2B2B2B',
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          paddingTop: 6,
        },
        headerStyle: { backgroundColor: '#121212' },
        headerTitleStyle: { color: '#F3F3F3' },
      }}
    >
      {/* 🏠 Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'RakshaAI Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 📍 Breadcrumb Trail */}
      <Tabs.Screen
        name="breadcrumb"
        options={{
          title: 'Trail',
          headerTitle: 'Live Location Trail',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="navigate-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 👤 Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: 'Your Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
