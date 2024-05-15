import React, { useState } from 'react'
import { ActivityIndicator,Button,StyleSheet,View } from 'react-native'

export default function Loader() {
  const[show,setShow]=useState(false);
  const display = () =>{
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 5000);
  }
  return (
    <View style={styles.loader}>
      <ActivityIndicator size={100} color={"blue"} style={styles.loadersgap} animating={show} />
      {
        show? <ActivityIndicator size={"large"} color={"red"} style={styles.loadersgap} /> : null
      }
      <Button title='Show' onPress={display} style={styles.loadersgap} />
    </View>
  )
}

const styles = StyleSheet.create({
  loader:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  loadersgap:{
    margin:10
  }
})
