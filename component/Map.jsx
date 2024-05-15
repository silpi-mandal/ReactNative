import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Map = () => {
  const user = [
    {
      id:1,
      name : "Mahadeb"
    },
    {
      id:2,
      name : "Silpi"
    },
    {
      id:3,
      name : "Agni"
    },
    {
      id:4,
      name : "Ram"
    },
    {
      id:5,
      name : "Sita"
    },
    {
      id:6,
      name : "Krisna"
    },
    {
      id:7,
      name : "Radha"
    },
    {
      id:8,
      name : "Shiva"
    },
    {
      id:9,
      name : "Shyam"
    },
    {
      id:10,
      name : "Khusi"
    },
    {
      id:11,
      name : "Babu"
    },
  ]
  return (
    <View>
      <Text style={{fontSize:30}}>List with Map function</Text>
      <ScrollView style={{marginBottom:80}}>
      {
        user.map((val)=> <Text style={styles.item} key={val.id}>{val.name}</Text>)
      }
      </ScrollView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  item:{
    fontSize:20,
    backgroundColor:"blue",
    color:"white",
    margin:10,
    padding:10,
    textAlign:"center"
  }
})
