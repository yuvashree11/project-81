import React, { Component } from 'react';
import {createDrawerNavigator}from '@react-navigation/drawer'
import Tabnavigator from './Tabnavigator'
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator()
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "home"component = {Tabnavigator}></Drawer.Screen>
            <Drawer.Screen name = "Profile"component = {Profile}></Drawer.Screen>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator