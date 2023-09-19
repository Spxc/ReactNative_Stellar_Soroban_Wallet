/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Colors
} from 'react-native';

import Soroban from './src/libs/soroban'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    try {
      Soroban.getAccount('GDIZOAHWITGPTOCKF3S6TPFVSEEBTH32MAN3JYOYXDZLLS5K6IGYMRQ7')
      .then(data => {
        alert(JSON.stringify(data))
      })
      .catch(error => {
        alert(error)
      })
    } catch (error) {
      alert(error) 
    }
  }, [])  

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.wrapper}
        >
        <View style={styles.sectionContainer}>
          <Text>Soroban Futurenet</Text>
          <Text>Testing with: GASOCNHNNLYFNMDJYQ3XFMI7BYHIOCFW3GJEOWRPEGK2TDPGTG2E5EDW</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
