import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './css/python.css';

function ReactNative() {
  const DownloadRef = useRef();

  const handlePrint = useReactToPrint({
        contentRef: DownloadRef, // Use contentRef instead of content
        documentTitle: "ReactNative_Notes"
      });

  return (
    <div >
      <div className="download-container">
        <div onClick={handlePrint} className="download-button topics-card">
          📄 Download as PDF
        </div>
      </div>

    <div ref={DownloadRef} className="python-container">
      {/* Main Title */}
      <h1>React Native</h1>

      {/* Section 1: Core Components */}
      <h2>Core Components</h2>
      <ol>
        {/* List items for Core Components */}
        <li>Text</li>
        <li>View</li>
        <ul>
          <li>default flexbox layout</li>
        </ul>
        <li>Button</li>
        <ul>
          <li>onPress</li>
          <li>onLongPress</li>
          <li>onPressIn</li>
          <li>onPressOut</li>
        </ul>
        <li>Pressable</li>
        <li>FlatList</li>
        <ul>
          <li>optimizes list performance</li>
          <li>item separation</li>
          <li>lazy</li>
          <li>footer and header</li>
        </ul>
        <li>FlatList vs Map</li>
        <li>ScrollView</li>
        <li>SafeAreaView</li>
        <li>Image</li>
        <ul>
          <li>ImageBackground</li>
          <li>react-native-svg</li>
        </ul>
        <li>Modal</li>
        <li>Alert</li>
        <li>Switch</li>
        <li>Statusbar</li>
        <li>ActivityIndicator</li>
        <li>Touchables</li>
        <ul>
          <li>TouchableOpacity</li>
          <li>TouchableWithoutFeedback</li>
        </ul>
      </ol>

      {/* Section 2: Styling */}
      <h2>Styling</h2>
      <ol start="17">
        {/* List items for Styling */}
        <li>style</li>
        <li>Styled-Component Utility</li>
        <li>Themed CSS</li>
        <li>Platform ios or android</li>
        <ul>
          <li>border in text</li>
          <li>shadow</li>
        </ul>
        <li>flexbox</li>
        <ul>
          <li>justify content</li>
          <li>align baseline</li>
          <li>align items</li>
        </ul>
        <li>Relative and Absolute layout</li>
        <li>Dimension API</li>
        <li>Drawer of Dimensions API</li>
        <li>Platform Module</li>
        <ul>
          <li>Platform.OS</li>
          <li>Platform.Select</li>
          <li>using Extensions</li>
        </ul>
      </ol>

      {/* Section 3: Navigation */}
      <h2>Navigation</h2>
      <ol start="28">
        {/* List items for Navigation */}
        <li>Expo vs React Navigation</li>
        <li>Stack</li>
        <li>Drawer</li>
        <li>Tab</li>
      </ol>
    </div>
    </div>
  );
}

export default ReactNative;