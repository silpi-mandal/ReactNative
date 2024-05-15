import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const Button = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button,styles.purple]} onPress={()=>{console.warn("purple");}} >Purple</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.primary]} onPress={()=>{console.warn("primary");}} >Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.sky]} onPress={()=>{console.warn("sky");}} >Sky</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]} onPress={()=>{console.warn("success");}} >Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.warning]} onPress={()=>{console.warn("warning");}} >Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.orange]} onPress={()=>{console.warn("orange");}} >Orange</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.danger]} onPress={()=>{console.warn("danger");}} >Danger</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.dark]} onPress={()=>{console.warn("dark");}} >Dark</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button} onPress={()=>{console.warn("grey");}} >Grey</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:"grey",
    color : "white",
    margin:10,
    padding:10,
    fontSize:25,
    textAlign:"center",
    borderRadius:10,
    shadowColor:"black",
    elevation : 10,
    shadowOpacity:5
  },
  success:{ backgroundColor:"green" },
  primary:{ backgroundColor:"blue" },
  warning:{ backgroundColor:"gold" },
  danger:{ backgroundColor:"red" },
  purple:{ backgroundColor:"purple" },
  orange:{ backgroundColor:"orange" },
  dark:{ backgroundColor:"black" },
  sky:{ backgroundColor:"skyblue" },
})
