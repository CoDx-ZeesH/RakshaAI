import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import LoadingScreen from '../screens/LoadingScreen';
import DashboardScreen from '../screens/DashboardScreen';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? <LoadingScreen /> : <DashboardScreen userName="Zeeshan" />}
    </View>
  );
}
