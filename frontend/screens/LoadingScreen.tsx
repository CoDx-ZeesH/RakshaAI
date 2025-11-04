import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

export default function LoadingScreen() {
  return (
    <LinearGradient
      colors={['#121212', '#1E1E1E', '#5B4DFF']}
      style={styles.container}
    >
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={styles.pulseCircle}
      >
      </Animatable.View>

      <Animatable.Text
        animation="fadeIn"
        delay={1000}
        duration={2000}
        style={styles.tagline}
      >
        Protecting what matters most…
      </Animatable.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulseCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 107, 74, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    color: '#F3F3F3',
    fontSize: 16,
    marginTop: 40,
    fontFamily: 'Poppins',
  },
});
