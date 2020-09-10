import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      
      <View style={styles.main}>
        <Text>Main</Text>
      </View>
      
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: '#afb6bd',
    flexGrow: 1
  },

  main: {
    backgroundColor: '#afb6bd',
    flexGrow: 5,
    backgroundColor: '#fff',
  },

  footer: {
    backgroundColor: '#afb6bd',
    flexGrow: 1
  }

});
