import React from "react";
import { WebView } from "react-native-webview";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const URL =
  "";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ECF0F1",
      }}
    >
      <StatusBar
        animated={true}
        translucent={false} // the imposter
        backgroundColor="#1982ff"
        style="light"
        barStyle="light-content"
        showHideTransition="slide"
        hidden={false}
      />
      <WebView
        style={{ width: "100%", height: "100%" }}
        // bounces={false}
        source={{ uri: URL }}
        originWhitelist={["*"]}
        startInLoadingState={true}
        showsHorizontalScrollIndicator={false}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccess={true}
        allowingReadAccessToURL={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        mixedContentMode={"always"}
        cacheEnabled={true}
        setSupportMultipleWindows={true}
        setJavaScriptCanOpenWindowsAutomatically={true}
        javaScriptCanOpenWindowsAutomatically={true}
        onError={console.error.bind(console, "error")}
      />
    </SafeAreaView>
  );
}
