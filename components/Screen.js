import React from "react";

import { StyleSheet, SafeAreaView, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from './Screen.style';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}



export default Screen;
