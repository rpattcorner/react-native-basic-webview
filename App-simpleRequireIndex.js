import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {

    // const abcHTML = require('./Policy.html');
    return (
      <View style={{ flex: 1 }}>
        <WebView
          style={{ flex: 1 }}
          source={require("./resources/index.html")}
        />
      </View>
    );
  }
}