import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const htmlVal = '<html> <head> 	<meta charset=\'utf-8\'> 	<meta http-equiv="content-type" content="text/html" /> 	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 	<link rel="icon" href="favicon.ico" type="image/x-icon"/> 	<title>abcjs basic demo</title> 	<link href="abcjs-audio.css" media="all" rel="stylesheet" type="text/css" /> 	<script src="abcjs_basic_5.9.1-min.js" type="text/javascript"></script> 	<style> 		.abcjs-inline-midi { 			max-width: 400px; 		} 	</style> </head> <body> <h1>abcjs basic demo page</h1> <p><b>abcjs</b> is an open source javascript rendering engine for interpreting abc formatted tunes. 	It will render sheet music entirely in your browser. 	It was written in 2009-2018 by Gregory Dyke and Paul Rosen. 	This page demonstrates a simple implementation of it so you can see how to use it in your own pages. </p> <p>Click one of the links below to see it in action.</p>  <p> 	<a href="#" onclick="ABCJS.renderAbc(\'notation\', cooleys); return false;" >Cooley\'s</a> | 	<a href="#" onclick="ABCJS.renderAbc(\'notation\', chorus); return false;" >Chorus</a> | 	<a href="#" onclick="ABCJS.renderAbc(\'notation\' bigNotes, { scale: 2.0 }); return false;" >Big Notes</a> | 	<a href="#" onclick="onMidi(); return false;" >MIDI</a> </p>  <p>For more information, see <a href="https://github.com/paulrosen/abcjs" >the project page</a>.</p> <hr /> <div id="notation"></div> <div id="audio"></div>  <script type="text/javascript"> 	var cooleys = \'X:1\nT: Cooley\'s\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\nD2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|\n"Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|1"Em"DEFD E2 D2:|2"Em"DEFD E2 gf||\n|:"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|\n"Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|1"Em"DEFD E2 gf:|2"Em"DEFD E4|]\n\'; 	var chorus = \'%%staffwidth 500\nX: 1\nT: Chorus\nV: T1 clef=treble name="Soprano"\nV: T2 clef=treble name="Alto"\nV: B1 clef=bass name="Tenor"\nV: B2 clef=bass name="Bass"\nL:1/8\nK:G\nP:First Part\n[V: T1]"C"ed"Am"ed "F"cd"G7"gf |\n[V: T2]GGAA- A2BB |\n[V: B1]C3D- DF,3 |\n[V: B2]C,2A,,2 F,,2G,,2 |\'; 	var bigNotes = "X:1\nM: 4/4\nL: 1/8\nK: Emin\n|:D2|EB{c}BA B2 EB|\n";  	function onMidi() { 		if (ABCJS.synth.supportsAudio()) { 			var visualObj = ABCJS.renderAbc(\'notation\', cooleys)[0]; 			var synthControl = new ABCJS.synth.SynthController(); 			synthControl.load("#audio", null, {displayRestart: true, displayPlay: true, displayProgress: true}); 			synthControl.setTune(visualObj, false); 		} else { 			document.querySelector("#audio").innerHTML = "<div class=\'audio-error\'>Audio is not supported in this browser.</div>"; 		} 	} </script>  </body> </html>';
  const INJECTED_JAVASCRIPT = `(function() {
    window.ReactNativeWebView.postMessage(JSON.stringify(window.location));
})();`;


  return (
    <WebView
      source={{ uri: 'https://reactnative.dev' }}
      injectedJavaScript={INJECTED_JAVASCRIPT}
      // onMessage={this.onMessage}
    />
    // <WebView
    //   originWhitelist={['*']}
    //   source={{ html: htmlVal }} />
    // <WebView 
    //   originWhitelist={['*']}
    //   source={{ html: '<h1>hello whirled</h1>' }}
    //   />
    // <WebView 
    // source={{ uri: 'https://thesession.org/tunes/2/2' }}
    // style={{ marginTop: 20 }} />

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
