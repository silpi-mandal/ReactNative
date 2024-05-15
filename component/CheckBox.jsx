 import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
 
 export default function CheckBox() {
  const[checked1, setChecked1]=useState(false);
  const[checked2, setChecked2]=useState(false);
  const[checked3, setChecked3]=useState(false);
  const[checked4, setChecked4]=useState(false);
  const[checked5, setChecked5]=useState(false);
   return (
      <View style={styles.main}>
        <Text style={{textAlign:"center",margin:10,fontWeight:900,fontSize:30}}>Skills</Text>
        <TouchableOpacity onPress={()=>setChecked1(!checked1)}>
          <View style={styles.view}>
          <View style={styles.check}>
            {checked1? <View style={styles.click}></View>:null}
          </View>
          <Text style={styles.text}>React Native</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setChecked2(!checked2)}>
          <View style={styles.view}>
          <View style={styles.check}>
           {checked2? <View style={styles.click}></View>:null}
          </View>
          <Text style={styles.text}>React JS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setChecked3(!checked3)}>
          <View style={styles.view}>
          <View style={styles.check}>
          {checked3? <View style={styles.click}></View>:null}
          </View>
          <Text style={styles.text}>JavaScript</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setChecked4(!checked4)}>
          <View style={styles.view}>
          <View style={styles.check}>
          {checked4? <View style={styles.click}></View>:null}
          </View>
          <Text style={styles.text}>CSS</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setChecked5(!checked5)}>
          <View style={styles.view}>
          <View style={styles.check}>
          {checked5? <View style={styles.click}></View>:null} 
          </View>
          <Text style={styles.text}>HTML</Text>
          </View>
        </TouchableOpacity>
      </View>
   )
 }

 const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center"
  },
  view:{
    flexDirection:"row",
    alignItems:"center",
    margin:5,
    textAlign:"left"
  },
  text:{
    fontSize:25
  },
  check:{
    borderWidth:2,
    borderColor:"black",
    height:24,
    width:24,
    // borderRadius:12,
    margin:5
  },
  click:{
    height:14,
    width:14,
    backgroundColor:"black",
    borderColor:"black",
    borderWidth:2,
    // borderRadius:8,
    margin:3
  }
 })
 