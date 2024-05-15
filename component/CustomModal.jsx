import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function CustomModal() {
  const[show, setShow]=useState(false)
  return (
    <View style={styles.container} >
    {
      show? <View style={styles.modal}>
      <View style={styles.body} >
        <Text style={styles.text}>Hi Agni!</Text>
        <Button title='close' onPress={()=>setShow(false)} />
      </View>
      </View> : null
    }
      <Button title='show' onPress={()=>setShow(true)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-end"
  },
  modal:{
    flex:1,
    backgroundColor:"rgba(50,50,50,0.5)",
    justifyContent:"center",
    alignItems:"center"
  },
  body:{
    backgroundColor:"#fff",
    height:200,
    width:200,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20
  },
  text:{
    fontSize:25,
    padding:10,
    marginBottom:10,
    color:"#000",
    fontWeight:"600"
  }
})
