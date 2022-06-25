           
  import React, {Component} from 'react'
  import {View, StyleSheet, TouchableOpacity, Text, container, button} from 'react-native'
  import {notificationManager} from '../NotificationManager'
  
 const Notificador = notificationManager

  export default function Home(props) {
       
      
    // Let {  container, button } = styles

    
    

      return(
        <View style={container}>
          <TouchableOpacity 
            style={button}
            onPress={() => props.enviar()}
          >
            <Text>Enviar notificação</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={button}
            onPress={() => props.cancelar()}>
            <Text>Cancelar notificações</Text>
          </TouchableOpacity>
        </View>
      )
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
          