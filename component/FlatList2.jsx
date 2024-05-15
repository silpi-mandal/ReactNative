import React from 'react'
import { FlatList, Text, View } from 'react-native'

export default function Flatlist2() {
  const user=[
    {
      id:1,
      name : "Silpi",
      department : "Computer"
    },
    {
      id:2,
      name : "Agni",
      department : "English"
    },
    {
      id:3,
      name : "Mahadeb",
      department : "Mythology"
    }
  ]
  return (
    <View>
      <Text style={{fontSize:30}}>User Details</Text>
      <FlatList
      data={user}
      renderItem={({item})=><View style={{fontSize:25,backgroundColor:"lightblue", margin:10, alignItems:"center"}}><Text>{item.name}</Text><Text>{item.department}</Text></View>}
      keyExtractor={item => item.id}
      />
    </View>
  )
}
