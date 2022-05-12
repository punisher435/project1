import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


import Colors from '../config/colors';

export default function Button({ title, onPress, buttonstyle,textstyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonstyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textstyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    

    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    
  },
  text: {
    
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",


  },
})

