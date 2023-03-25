import React, { Component }from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render(){
    return(
        <View style= {style.container }>
        <View style= {style.container1}>
        <Text style= {style.textDesign}>"Hello World!"</Text>
        <Image source={logo}style={style.imgDesign} />
        </View> 
        </View> 
    )    
  }
}

const style = StyleSheet.create({

    imgDesign:{
        width: 100,
        height: 100,

    },

    container: {
      flex: 1,
      backgroundColor:"#F3E993",
      alignItems: 'center', 
      


    },
    container1:{
       backgroundColor:"#7A988",
    
  },  
    textDesign: {
      fontSize: 30,
      color: "#7A4988",
      fontWeight: "bold",

    }

 });


export default App;