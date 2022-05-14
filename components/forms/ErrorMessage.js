import React from "react";
import { StyleSheet } from "react-native";

import Text from "../Text";
import styles from './ErromMessage.style';

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <Text style={styles.error}>{error}</Text>;
}


export default ErrorMessage;
