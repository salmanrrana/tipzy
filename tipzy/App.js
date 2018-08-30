import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/main';


// I hope this works
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#333745' }}>
        <Main style={{ flex: 1 }} />
      </View>
    );
  }
}
