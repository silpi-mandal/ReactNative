import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Student extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30,color:"green"}}>Student Name : {this.props.name}</Text>
      </View>
    )
  }
}
