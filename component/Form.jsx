import React, { useState } from 'react'
import { View,Text, StyleSheet, TextInput, Button } from 'react-native';
const Form = () => {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[display, setDisplay] = useState(false);
  const clear =()=>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <View>
    <Text style={{fontSize:30}}>Form in React Native</Text>
    <TextInput 
    value={name}
    placeholder='Enter Your Name'
    onChangeText={(text)=>setName(text)}
    style={styles.textinput}
    />
    <TextInput
    value={email}
    placeholder='Enter Your Email'
    onChangeText={(text)=>setEmail(text)}
    style={styles.textinput}
    />
    <TextInput
    value={password}
    placeholder='Enter Your Password'
    secureTextEntry={true}
    onChangeText={(text)=>setPassword(text)}
    style={styles.textinput}
    />
    <View style={{marginBottom:10}}>
    <Button title='Print Details' color={"green"} onPress={()=>setDisplay(true)} />
    </View>
    <Button title='Clear' onPress={clear} />
    {
      display? <View> 
        <Text style={{fontSize:20}}>Name : {name}</Text>
        <Text style={{fontSize:20}}>Email : {email}</Text>
        <Text style={{fontSize:20}}>Password : {password}</Text>
      </View> : null
    }
    </View>
  )
}

export default Form;

const styles = StyleSheet.create({
  textinput : {
    fontSize:20,
    borderWidth:2,
    borderColor:"blue",
    margin:10,
    padding:10
  }
})
