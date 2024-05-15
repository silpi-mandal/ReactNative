import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Student from './Student';

export default class Class extends Component {

  constructor(){
    super();
    this.state={
      name:"",
      display:false
    }
    this.handlePress = this.handlePress.bind(this);
  }

  valChange=(val)=>{
    this.setState({...this.state, name:val});
  }

  handlePress() {
    this.setState({...this.state, display:true});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize:30, color:"red"}}>{this.state.name}</Text>
        <TextInput
        placeholder=" type....."
        style = {{fontSize:20,margin:10,borderWidth:2,borderColor:"green"}}
        onChangeText={(text)=>this.valChange(text)}
        />
        <Button title='Press Me' onPress={this.handlePress}/>
        {
        (this.state.display==true)? <Student name={this.state.name} /> : null 
        }
      </View>
    )
  }
}
