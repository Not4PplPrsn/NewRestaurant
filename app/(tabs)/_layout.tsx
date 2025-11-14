import { Tabs, useNavigation/**Allow for the creaton of a new function  */ } from 'expo-router';
import React, { useState, useRef, useEffect, createContext } from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// calling the function 


export default function TabLayout() {
  return (

    <Tabs
    
      screenOptions={{
        headerShown: true ,
        tabBarButton: HapticTab,
        tabBarStyle:{
          backgroundColor: '#C52A1D',
          width: 230,
          height: 60,
          margin: 90,
          alignSelf: 'center',
          alignItems: 'center',
          alignContent: 'center',
          borderRadius:30,
          justifyContent: "space-around",
          paddingBottom: 2,
          position: 'absolute' /**This allow the page contents of the screens not be effected by the styling on the bottom tab and layers it on the screens rather in the screens */
          
          
        },
        tabBarInactiveTintColor: '#e0cacaff',
        tabBarActiveTintColor: 'rgba(238, 186, 16, 0.84)',
        headerTitleAlign: 'center',
        headerStyle:{
          margin: 20,
          backgroundColor: 'transparent',
          position: 'static',
          
          

          
        },
          headerTransparent: true,
          headerBackground: () => null,
          headerShadowVisible: false, // removes shadow/elevation
          headerTitle: () => (<View>
            <Image
            source ={require('../../assets/images/TheLogo.png') /**(ChatGPT, 2025) */}
            style ={{height: 50, width: 50, borderRadius:25}}
            />
          </View>)/**Added the image as the headerTitle so that it will function as logo in the header. */,
          headerTitleAlign:'left',
        tabBarLabelStyle:{
          fontFamily: 'Inter'
        }
        
      }}
      
      >
          <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          
          
        }}
      />

      <Tabs.Screen
      name= 'EditPage'
      options = {{
        title: 'Edit',
        tabBarIcon: ({color}) => <AntDesign size = {28} name="form" color={color} />
        

      }}
      
      />


      <Tabs.Screen
      name='Select'
      options={{
        title: 'Menu',
        tabBarIcon: ({color})  =>  <AntDesign size={25} name="select" color={color}/>
      }}/>
    </Tabs> 
  );
}
