import React from 'react'
import { Text, View } from 'react-native'

export default function Flex() {
  return (
    <View style={{flex:1}}>
      {/* <Text style={{fontSize:30}}>Flex</Text> */}
      <View style={{flex:2, backgroundColor:"red", flexDirection:"row"}}>
      <View style={{flex:1, backgroundColor:"yellow", margin:10}}></View>
      <View style={{flex:1, backgroundColor:"purple", margin:10}}></View>
      <View style={{flex:1, backgroundColor:"orange", margin:10}}></View>
      </View>
      <View style={{flex:1, backgroundColor:"green"}}></View>
      <View style={{flex:1, backgroundColor:"blue"}}></View>
    </View>
  )
}
