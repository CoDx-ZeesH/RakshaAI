// app/_layout.tsx
import { Slot } from 'expo-router';

export default function RootLayout() {
  // This tells Expo Router: "Render whatever layout exists inside (drawer)"
  return <Slot />;
}
