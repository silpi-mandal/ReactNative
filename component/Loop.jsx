import React from 'react'
import { FlatList, Text, View,StyleSheet } from 'react-native'
import UserData from './UserData'

const Loop = () => {
  const user = [
    {
      id:1,
      name : "Mahadeb",
      email:"mahadeb@gmail.com"
    },
    {
      id:2,
      name : "Silpi",
      email:"silpi@gmail.com"
    },
    {
      id:3,
      name : "Agni",
      email:"agni@gmail.com"
    },
    {
      id:4,
      name : "Ram",
      email:"ram@gmail.com"
    },
    {
      id:5,
      name : "Sita",
      email:"sita@gmail.com"
    }
  ]
  return (
    <View>
      <Text style={{fontSize:30}}>Loop with FlatList</Text>
      <FlatList
      data={user}
      renderItem={({item})=> <UserData item={item} /> }
      />
    </View>
  )
}

export default Loop;

const styles = StyleSheet.create({
  box:{
    margin:5,
    borderWidth:1,
    borderColor:"orange",
    flexDirection:"row",
    height:60
  },
  item:{
    fontSize:20,
    flex:1,
    color:"orange",
    backgroundColor:"green",
    margin:2,
    textAlign:"center",
    textAlignVertical:"center"
  } 
})
