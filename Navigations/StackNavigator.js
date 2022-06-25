import React from 'react';
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre';

import { createStackNavigator } from "@react-navigation/stack"
import { StackRouter } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function StackNavigator(){

    return(
        <Stack.Navigator>
<Stack.Screen component={Home} name="Home"/>
<Stack.Screen component={Sobre} name="Sobre"/>
        </Stack.Navigator>

    )
}