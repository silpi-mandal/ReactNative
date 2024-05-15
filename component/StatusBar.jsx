import React, { useState } from 'react'
import { Button, StatusBar, StyleSheet, View } from 'react-native'

export default function Statusbar() {
  const[toggle, setToggle] = useState(false);
  const[style,setStyle]=useState("default")
  return (
    <View style={styles.main}>
      <StatusBar 
      backgroundColor="lightblue"
      barStyle={style}
      hidden={toggle}
      />
      <Button title="Toggle StatusBar" onPress={()=>setToggle(!toggle)} />
      <Button title='Update Style' onPress={()=>setStyle("dark-content")} />
    </View>
  )
}

const styles = StyleSheet.create({
 main:{
  flex:1,
  justifyContent:"center"
 }
})