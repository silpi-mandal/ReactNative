import React, { useState } from 'react'
import { Button, StyleSheet, View,Modal, Text } from 'react-native'

export default function ModalBox() {
  const[show, setShow]=useState(false);
  return (
    <View style={styles.main}>
      <Modal
      transparent={true}
      visible={show}
      animationType="slide"
      >
        <View style={styles.view}>
          <View style={styles.box}>
            <Text style={styles.text}>Hello Code Step by Step</Text>
            <Button title='Close' onPress={()=>setShow(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.btn}>
        <Button title='Open Modal' onPress={()=>setShow(true)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  btn:{
    flex:1,
    justifyContent:"flex-end"
  },
  view:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  box:{
    backgroundColor:"white",
    padding:30,
    borderRadius:20,
    shadowColor:"black",
    elevation:5
  },
  text:{
    fontSize : 25,
    marginBottom:10
  }
})
