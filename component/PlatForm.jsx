import React from 'react'
import { Text, View, Platform } from 'react-native'

export default function PlatForm() {
  return (
   <View>
    <Text style={{fontSize:30}}>Platform : {Platform.OS}</Text>
    {
      Platform.OS=="android"? 
      <View style={{backgroundColor:"green",height:200,width:200}}></View>
      :
      <View style={{backgroundColor:"red",height:200,width:200}}></View>
    }
    <Text style={{fontSize:25}}>React Native Version : {JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
   </View>
  )
}
