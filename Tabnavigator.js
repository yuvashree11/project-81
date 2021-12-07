import React, { Component } from 'react';
import {createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CreatePost from '../screens/CreatePost'
import Feed from '../screens/Feed'

const Tab = createBottomTabNavigator()
const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator
           screenOptions = {({route})=>({
               tabBarIcon:({focused,color,size})=>{
                   let iconname
                   if (route.name === 'Feed') {
                       iconname = focused
                       ?'book'
                       :'book-outline'
                   }
                   else if (route.name === 'CreatePost'){
                       iconname = focused
                       ?'create'
                       :'create-outline'
                   }
                   return <Ionicons name = {iconname}size = {size}color = {color}/>

               }
           })}
           tabBarOptions = {{
               activeTintColor:"tomato",
               inactiveTintColor:"gray"
           }}
        >
            <Tab.Screen name = 'Feed' component = {Feed}/>
            <Tab.Screen name = 'CreatePost' component = {CreatePost}/>
        </Tab.Navigator>
    )
}
export default BottomTabNavigator