import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  const htmlVal = `
  <html> <head> 	
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="favicon.ico" type="image/x-icon"/>
  <title>abcjs: Basic Demo</title>
  <script type="text/javascript" async="" src="https://thesession.org/js/abcjs_basic_5.11.0-min.js"></script>

  <script type="text/javascript">
    const abcd = "T: Cooley's" + " " + "M: 4/4"
    let abc = "T: Cooley's " +
    "M: 4/4 " +
    "L: 1/8 " +
    "R: reel " +
    "K: Emin " +
    "|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD| " +
    "EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:| " + 
    "|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg| " +
    "eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|";

    window.alert (abc)


    function load() {
      alert('about to load')
      // window.alert (abcjs.synth.supportsAudio())
      ABCJS.renderAbc('target', abc);
      alert('loaded')
		}

	</script>
  </head> 
  <body onload="load()">
  <h1>abcjs basic demo page</h1> 
  Hi there
  <div id="target"></div>
  </body>
  </html>`;

  // const abcjs = process.browser ? require('abcjs') : null; 

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: htmlVal }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
