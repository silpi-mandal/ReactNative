  import React from 'react'
  import { Text, View,StyleSheet } from 'react-native'
  
  const UserData = ({item}) => {
    return (
      <View style={styles.box}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
      </View> 
    )
  }
  
  export default UserData;

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
  