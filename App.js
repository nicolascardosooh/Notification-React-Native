//componentes
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

//navegação
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//telas
import Home from "./src/Pages/Home"
import Redirect from "./src/Pages/Redirect"

//notificacao
import {notificationManager} from './src/NotificationManager';
const Notificador = notificationManager;

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
    Notificador.configure();
    Notificador.createChannel();
    Notificador.showNotificationSchedule();
  }

  MandarNotificacao = () => {
    Notificador.showNotification(
      1,
      'Alimente-se',
      'Lembre-se de se alimentar com a Prolife! Temos os melhores lanches e muitas variedades',
      {}, // data
      {}, // options
    );
  };

  CancelarNotificacao = () => {
    Notificador.cancelAllLocalNotification();
  };

  render() {
    return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home'>
        { 
         ({ navigation }) => {
          Notificador.setNavegador(navigation)
            return(<Home enviar={this.MandarNotificacao} cancelar={this.CancelarNotificacao}/>)
         }

        }
      </Stack.Screen>
      <Stack.Screen name='Redirect' component={Redirect}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
    )
  }
}
