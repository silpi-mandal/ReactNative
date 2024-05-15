import React from 'react'
import { SectionList, Text, View } from 'react-native'

const Sectionlist = () => {
  const user = [
    {
      id:1,
      name : "Mahadeb",
      data : ["HTML","CSS","JavaScript"]
    },
    {
      id:2,
      name : "Silpi",
      data : ["React JS","React Native","JavaScript"]
    },
    {
      id:3,
      name : "Agni",
      data : ["C","C++","Java"]
    },
    {
      id:4,
      name : "Ram",
      data : ["PHP","React JS","JavaScript"]
    },
    {
      id:5,
      name : "Sita",
      data : [".Net","C#","Angular"]
    },
  ]
  return (
    <View>
      <Text style={{fontSize:25}}>SectionList with React Native</Text>
      <SectionList
      sections={user}
      keyExtractor={(item)=>item}
      renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=> <Text style={{fontSize:25, color:"red"}}>{name}</Text>}
      />
    </View>
  )
}

export default Sectionlist
