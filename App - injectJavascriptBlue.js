import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {
    const run = `
      document.body.style.backgroundColor = 'blue';
      true;
    `;

    setTimeout(() => {
      this.webref.injectJavaScript(run);
    }, 3000);

    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={(r) => (this.webref = r)}
          source={{
            uri:
              'https://github.com/react-native-community/react-native-webview',
          }}
        />
      </View>
    );
  }
}