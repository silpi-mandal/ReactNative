import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Radio2() {
  const[active, setActive]=useState(1);
  const skill = [
    {
      id:1,
      name : "Java"
    },
    {
      id:2,
      name : "PHP"
    },
    {
      id:3,
      name : "C++"
    },
    {
      id:4,
      name : "Python"
    },
    {
      id:5,
      name : "SQL"
    },
  ]
  return (
    <View style={styles.main}>
    {
      skill.map((item)=>{
        return <TouchableOpacity key={item.id} onPress={()=>{setActive(item.id)}}>
        <View style={styles.view}>
        <View style={styles.check}>
          {active===item.id? <View style={styles.click}></View>:null}
        </View>
          <Text style={styles.radio}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      })
    }
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
    margin:5,
    width:100
  },
  radio:{
    fontSize:25,
    color:"blue"
  },
  check:{
    borderWidth:2,
    borderColor:"blue",
    height:24,
    width:24,
    borderRadius:12,
    margin:5
  },
  click:{
    height:16,
    width:16,
    backgroundColor:"blue",
    borderColor:"blue",
    borderWidth:2,
    borderRadius:8,
    margin:2
  }
})

