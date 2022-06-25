           
  import React, {Component} from 'react'
  import {View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native'
  import {notificationManager} from './src/NotificationManager'

 //const Notificador = notificationManager

  export default class Redirect extends Component {

    render() {
      let {container, button} = styles

      return(
        <View style={container}>
      <Text>Bem vindo a tela de redirecionamento do projeto, se chegou aqui é porque funcionou </Text>
        </View>
      )
    }
  }
   /* Estilização do projeto */
   const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 200,
      marginTop: 10
    }
  });

          