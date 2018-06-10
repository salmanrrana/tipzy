import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from '../Style';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <Text style={Style.titletext}>T I P Z Y</Text>
      </View>
    );
  }
}
