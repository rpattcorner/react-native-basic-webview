import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { decode as atob, encode as btoa } from 'base-64';

export default function App() {

  const paddy = `
  X: 1
  T: Rakish Paddy
  R: reel
  M: 4/4
  L: 1/8
  K: Ador
  |:c4 c2 AB|cBAG Ec c2|Add^c defe| dcAG FGAB|
  c4 c2 AB|cBAG EDCE|DEFG ABcA|dcAG F2 D2:|
  |:eg g2 ag g2|eg g2 ed^cd|ea a2 ba a2|ea a2 egdg|
  eg g2 ag g2|fed^c defg|afge fde^c|dcAG F2 D2:|`
  // const abc_text = "c3 B c2 AB|cBAG EG G2|Add^c defe|dcAG FGAB|! c3 B c2 AB|cBAG EFGE|DEFG ABcA|dcAG FD D2:|! |:eg g2 ag g2|eg g2 ed^cd|eaag a2 ag|eaag ed^cd|! eg g2 ag g2|f2 fe defg|afge defe|dcAG FD D2:|! c3 B c2 AB|cBAG EG G2|Add^c defe|dcAG FGAB|! c3 B c2 AB|cBAG EFGE|DEFG ABcA|1 dcAG FGAB:|2 dcAG FD D2||! |:eg g2 ag g2|eg g2 edBd|eaa2 bgag|eaag edBd|! eg g2 ag g2|egge defg|afge fde^c|1 dcAG FD D2:|2 dcAG FGAB||"
  // const cooleys = "T: Cooley's\n" +
  // "M: 4/4\n" +
  // "L: 1/8\n" +
  // "R: reel\n" +
  // "K: Emin\n" +
  // "c3 B c2 AB|cBAG EG G2|Add^c defe|dcAG FGAB|! c3 B c2 AB|cBAG EFGE|DEFG ABcA|dcAG FD D2:|! |:eg g2 ag g2|eg g2 ed^cd|eaag a2 ag|eaag ed^cd|! eg g2 ag g2|f2 fe defg|afge defe|dcAG FD D2:|! c3 B c2 AB|cBAG EG G2|Add^c defe|dcAG FGAB|! c3 B c2 AB|cBAG EFGE|DEFG ABcA|1 dcAG FGAB:|2 dcAG FD D2||! |:eg g2 ag g2|eg g2 edBd|eaa2 bgag|eaag edBd|! eg g2 ag g2|egge defg|afge fde^c|1 dcAG FD D2:|2 dcAG FGAB||"
  // "|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|\n" +
  // "EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|\n" +
  // "|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|\n" +
  // "eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|";

  let title = "Cooley's From Phone"
  let rhythm = 'Reel'
  let length = "1/8"
  let origin = "USA"
  let meter = "4/4"
  let key = "EMin"

  let header = `X: 1
T: ${title}
R: ${rhythm}
L: ${length}
O: ${origin}
M: ${meter}
K: ${key}`
let cooleys = `
${header}
|:D2|EBBA B2 EB|B2 AB dBAG|FDAD BDAD|FDAD dAFD|
EBBA B2 EB|B2 AB defg|afec dBAF|DEFD E2:|
|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|
eB B2 eBgB|eB B2 defg|afec dBAF|DEFD E2:|
`

  
  let abc_encoded = btoa(cooleys);
  return (
    <WebView
      source={{
        uri: 'http://192.168.1.9:5501/examples/basic-synth.html?' + abc_encoded,
      }}
    />
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
