import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground} from 'react-native'
// import  backgroundImage from "assets/images/bckimg.jpg"

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Welcome to Tracker </Text>
        <ImageBackground
        source={require('@/assets/images/bckimg.jpg')}
        resizeMode='cover'
        style={styles.image}></ImageBackground>
        
      </View>
    )
  }
}

export default App


const styles = StyleSheet.create({
  container :{
    flex:1,
    flexDirection: "column",
  },
  text: {
    color: "#2f2a2f",
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    justifyContent: 'center'
  }
})