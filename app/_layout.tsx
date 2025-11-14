import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import React, { useState } from 'react';
import 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { MaterialIcons, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

//The pages for the history tab in the drawer
import Bin from './History/RemovedItems';
import DetailedCart from './History/ChosenItems';
import { ReduceMotion } from 'react-native-reanimated';

  const router= useRouter();//The navigation function which will allow the tabs navigate to their respective page


// The array where the history is stored.
 
// The type handling for the array
 type Pages= {
  id: number
  name: string,
  path: Parameters<typeof router.push>[0]; /**this parameter allow for me to fill the path element for each item in the array with having to type it out */
  icon: any
  

 };

 const History: Pages[]  = [/**(W3Schools, 2025) */
  {id: 1, name: 'Bin', path:'/History/RemovedItems' , icon:<Ionicons name="trash-outline" color={"#f0e9dfff"} size={33}/>},/**(W3Schools, 2025) */
  {id: 1, name: 'Cart', path:'/History/ChosenItems' , icon:<FontAwesome name='opencart' color={"#e6d8c6ff"} size={33}/>},
 ]

export const unstable_settings = {
  anchor: '(tabs)',/**(W3Schools, 2025) */
};

export default function RootLayout() {

  return (
    <Drawer /**(Expo, 2025) */
    screenOptions={{
      drawerType: 'front', headerShown: false/**Force the header for the drawer to show  */,
            drawerStyle: { width: 260,
        direction: 'ltr',
        paddingTop: 5,
        paddingBottom: 15,
        justifyContent: 'space-between',
        borderTopRightRadius: 10,
        animationDirection: 'reverse',
        animationName:'slide-in-right',
        animationFillMode: 'forwards',
        animationDuration: '5050ms',
        backgroundColor: '#C52A1D',
      },
            
      drawerPosition: 'right',
      drawerLabelStyle: { textAlign: 'right', paddingRight: 10, paddingLeft: 0 ,},
      headerTitleAlign: 'left', 
      drawerActiveTintColor:'rgba(61, 247, 123, 1)',
      drawerInactiveTintColor: '#fff',

      headerStyle:{
        backgroundColor:"#0000",
        shadowColor: '#00000',
        
        
      },
      headerTitle: "",
      headerTitleStyle:{
        alignSelf: "center",
        alignContent: 'center',
        textAlign: 'center'
      },
      

      


    }}
    drawerContent={() => <DrawerScroller/>/**Called the function below in here so it is used  */}
    />
  );
}

function DrawerScroller(){ /**(Expo, 2025) */

  const navigate= useNavigation();
  const [expandSections, setExpandSections] = useState({/**(W3Schools, 2025) */
    History: false
  });
  const [items, setItems] = useState([/**(W3Schools, 2025) */
    History.map(item => ({...item, visible: true })),

  ]);
    const toggleSection = (key: keyof typeof expandSections) => { /**(W3Schools, 2025) */ /**This is the function for the  the the toggling of items for the opening and closing of  the the item in the drawer items  */
    setExpandSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return(
    <DrawerContentScrollView /**(Expo, 2025) */
    

    >
<DrawerItem /**(Expo, 2025) */
  
  label="Main"
  labelStyle={{ textAlign: 'right', color: "#ffff", textTransform: 'uppercase' }}

  onPress={() => router.push('/(tabs)')}
  

  />

      <View style={{flexDirection: 'row-reverse'}}>
    <Text style={{color: "#ffff", textTransform: 'uppercase', fontWeight: '700', padding: 21}}>History</Text>
    <Switch
      value={expandSections.History}
      onValueChange={() => toggleSection('History')}
    />
  </View>


  { expandSections.History&&
  
    History.map(item => (

      <DrawerItem
      key={item.id}
      label= {item.name}
      labelStyle={
        {
          fontFamily: "monospace",
          textTransform: 'uppercase',
          fontWeight: '900',
          color: '#fff',
          alignSelf: 'center'
        }
      }
      onPress={() => router.push(item.path)}
      
      />

    ))}

  



    </DrawerContentScrollView>
  );
}