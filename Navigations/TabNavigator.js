import React from 'react';
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre';
import Produtos from '../Screens/Produtos';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DrawerNavigator from './DrawerNavigator';


const Tab = createBottomTabNavigator();

export default function TabNavigator(){

    return(
        <Tab.Navigator>

            <Tab.Screen component={DrawerNavigator} name="Drawer" options={{headerShown: false}}/>
            <Tab.Screen component={Home} name="Home"/>
            <Tab.Screen component={Sobre} name="Sobre"/>
            <Tab.Screen component={Produtos} name="Produtos"/>

        </Tab.Navigator>

    )
}