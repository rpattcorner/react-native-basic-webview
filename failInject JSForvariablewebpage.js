import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  render() {
    const run = `
      document.body.style.backgroundColor = 'blue';
      true;
    `;

    const prompt = `
    alert('hi');
    `
    const score = `
    alert('before')
    var visualObj = ABCJS.renderAbc("paper", abc, {
      responsive: "resize" })[0];
    alert('after')
    `

    setTimeout(() => {
      this.webref.injectJavaScript(score);
    }, 300);


    const html = `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <title>abcjs: Basic Synth Demo</title>
    
        <style>
            main {
                max-width: 770px;
                margin: 0 auto;
            }
    
            .audio-error {
                color: red;
                border: 2px solid red;
                padding: 10px;
            }
        </style>
    
        <script src="../dist/abcjs-basic.js" type="text/javascript"></script>
        <script type="text/javascript">
        var abc = "T: Cooley's\n" +
        "M: 4/4\n" +
        "L: 1/8\n" +
        "R: reel\n" +
        "K: Emin\n" +
        "|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|\n" +
        "EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|\n" +
        "|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|\n" +
        "eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|";
    
    

            }
        </script>
    </head>
    
    <body>
        <main>
            <div id="paper"></div>
            <p class="suspend-explanation">Browsers won't allow audio to work unless the audio is started in response to a
                user action. This prevents auto-playing web sites. Therefore, the
                following button is needed to do the initialization:</p>
            <button class="activate-audio">Activate Audio Context And Play</button>
            <button class="stop-audio" style="display:none;">Stop Audio</button>
            <div class='audio-error' style="display:none;">Audio is not supported in this browser.</div>
        </main>
    <!-- Code injected by live-server -->
    <script type="text/javascript">
      // <![CDATA[  <-- For SVG support
      if ('WebSocket' in window) {
        (function () {
          function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
              var elem = sheets[i];
              var parent = elem.parentElement || head;
              parent.removeChild(elem);
              var rel = elem.rel;
              if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
              }
              parent.appendChild(elem);
            }
          }
          var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
          var address = protocol + window.location.host + window.location.pathname + '/ws';
          var socket = new WebSocket(address);
          socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
          };
          if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
          }
        })();
      }
      else {
        console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
      }
      // ]]>
    </script></body>
    
    </html>
    `;

  
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={(r) => (this.webref = r)}
          source={{ html }}
          onMessage={(event) => {
            alert(event.nativeEvent.data);
          }}
        />
      </View>
    );
  }
}