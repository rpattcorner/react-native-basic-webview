import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {
    const runFirst = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri:
              'https://github.com/react-native-community/react-native-webview',
          }}
          onMessage={(event) => {}}
          injectedJavaScript={runFirst}
        />
      </View>
    );
  }
}