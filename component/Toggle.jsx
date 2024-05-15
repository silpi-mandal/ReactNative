import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

export default function Toggle() {
  const[show, setShow] = useState(false)
  return (
    <View>
      <Text style={{fontSize:30}}>Show/Hide Component</Text>
      <Button title='Toggle' onPress={()=>setShow(!show)} />
     {
      show?  <Hide/> : null
     }
    </View>
  )
}

function Hide() {
  let timer = setInterval(() => {
    console.warn("Timer Called");
  }, 2000);
  useEffect(()=>{
    // console.warn("Component is loaded");
    return(()=>{
      // console.warn("Component is unmounted");
      clearInterval(timer);
    })
  },[])
  return (
  <View>
    <Text style={{fontSize:25, color:"green"}}>User Component</Text>
  </View>
  )
}

