import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Grid = () => {
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
      <Text style={{fontSize:30}}>Grid in React Native</Text>
      <ScrollView style={{marginBottom:100}}>
      <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
        {
          user.map((val)=><Text key={val.id} style={styles.item}>{val.name}</Text>)
        }
      </View>
      </ScrollView>
    </View>
  )
}

export default Grid;

const styles = StyleSheet.create({
  item:{
    fontSize:20,
    backgroundColor:"blue",
    color:"white",
    margin:10,
    padding:10,
    textAlign:"center",
    height:140,
    width:150,
    textAlignVertical:"center"
  }
})
