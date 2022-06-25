import React from 'react';
import Home from '../Screens/Home';
import Sobre from '../Screens/Sobre';
import Produtos from '../Screens/Produtos';

import { createDrawerNavigator } from "@react-navigation/drawer"


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){

    return(
        <Drawer.Navigator>
            
<Drawer.Screen component={Home} name="Home"/>
<Drawer.Screen component={Sobre} name="Sobre"/>
<Drawer.Screen component={Produtos} name="Produtos"/>

        </Drawer.Navigator>

    )
}