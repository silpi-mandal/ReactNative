import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Radio() {
  const[active, setActive]=useState(1);
  return (
     <View style={styles.main}>
      <TouchableOpacity onPress={()=>{setActive(1)}}>
        <View style={styles.view}>
        <View style={styles.check}>
          {active===1? <View style={styles.click}></View>:null}
        </View>
          <Text style={styles.radio}>Radio1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setActive(2)}}>
        <View style={styles.view}>
        <View style={styles.check}>
          {active===2? <View style={styles.click}></View>:null}
        </View>
          <Text style={styles.radio}>Radio2</Text>
        </View>
      </TouchableOpacity>
     </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  view:{
    flexDirection:"row",
    alignItems:"center",
    margin:5
  },
  radio:{
    fontSize:25
  },
  check:{
    borderWidth:2,
    borderColor:"black",
    height:24,
    width:24,
    borderRadius:12,
    margin:5
  },
  click:{
    height:16,
    width:16,
    backgroundColor:"black",
    borderColor:"black",
    borderWidth:2,
    borderRadius:8,
    margin:2
  }
})
