import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {

    // const abcHTML = require('./Policy.html');
    return (
      <View style={{ flex: 1 }}>
        <WebView

          source={{ html: require('./index').template() }}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEnabled={false}
        />
      </View>
    );
  }
}