import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const Flatlist = () => {
  const fruit = ["Apple","Banana","Orange","Graps","WaterMelon"]
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
  ]
  return (
  <View>
  <Text style={{fontSize:30}}>FlatList of React Native</Text>
   <FlatList
   data={fruit}
   renderItem={({item})=><Text style={styles.item}>{item}</Text>}
   keyExtractor={item=>item.id} 
   />
  </View> 
  )
}

export default Flatlist

const styles = StyleSheet.create({
  item:{
    fontSize:20,
    backgroundColor:"blue",
    color:"white",
    margin:5,
    padding:5,
    textAlign:"center"
  }
})
