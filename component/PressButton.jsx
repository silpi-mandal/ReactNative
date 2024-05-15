import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function PressButton() {
  return (
    <View style={styles.main}>
      <Pressable
      onPress={()=>{console.warn("Button Press");}}
      onLongPress={()=>{console.warn("Long Press");}}
      delayLongPress={2000}
      onPressIn={()=>{console.warn("Press In");}}
      onPressOut={()=>{console.warn("Press Out");}}
      >
        <Text style={styles.btn}>Pressable</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center"
  },
  btn:{
    backgroundColor:"purple",
    color:"#fff",
    fontSize:25,
    textAlign:"center",
    padding:10,
    margin:20,
    borderRadius:15,
    shadowColor:"#000",
    elevation:5
  }
})
