import React, { useEffect, useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

export default function UseEffect() {
  const[count, setCount] = useState(0);
  const[value,setValue] = useState([]);
  useEffect(()=>{
    console.warn("Component is loaded");
  },[])

  useEffect(()=>{
    console.warn("Count is updated");
  },[count])

  useEffect(()=>{
    console.warn("Name is updated");
  },[value])

  return (
    <View>
      <Text style={{fontSize:23}}>Life Cycle of Funtional Component</Text>
      <UseEffect2 count={count} setCount={setCount} />
      <TextInput 
      placeholder='Enter name'
      style={{margin:10, fontSize:18, borderWidth:2, height:40}}
      onChangeText={(text)=>setValue(text)}
      />
      <Text style={{fontSize:27}}>{value}</Text>
    </View>
  ) 
}

function UseEffect2({count , setCount}) {
  return (
    <View>
      <Text style={{fontSize:30}}>Count : {count}</Text>
      <Button  title='+1' onPress={()=>setCount(count=>count+1)} />
      <Button  title='-1' onPress={()=>setCount(count=>count-1)} />
    </View>
  )
}

