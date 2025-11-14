import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{useState} from 'react';
import { useTabBarInactivity } from '@/functions/AutoHidTabBar'; // calling the function  i made  in the functions folder

import { useCartStore } from '@/functions/DishesEntries';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
const router = useRouter();

export default function DetailedCart(){
   const cart = useCartStore((state) => state.cart)// store the array in a new form
  // storing functions in new variables
   const removeCartItem = useCartStore((state) => state.removeFromCart)

   const clearCart = useCartStore((state) => state.clearCart)

   const totalCart = useCartStore((state) => state.getTotal)
    return(
  <ImageBackground
  source={require('../../assets/images/Backgrounds/TableSetting4.jpg')}
        style={[StyleSheet.absoluteFill,{opacity:20} ]}

  
  >
      <LinearGradient
  colors={['#e2d8d898', '#e06e11a9']}
    start={{x:0.15, y:0.26}}
  end={{x:0.26, y:1.06}}

      style={[StyleSheet.absoluteFill,{opacity:20} ]}


 />
          <TouchableOpacity
          onPress={() => router.back()}>
            <View> 
              <Entypo name = "chevron-left" color={"#0fb333ff"} size={55}/>
            </View>
          </TouchableOpacity> {/**returning users to a previous page  */}
  



          <Text style={styles.heading}>Cart</Text>

<ScrollView>
    {cart.map((id ) => ( 
      <View key={id.id} /**key to help with displaying of items */
      style ={styles.theItemContainer} /**Styling for the container  */
      
      >

              <TouchableOpacity
      onPress={()=> removeCartItem(id.id) /**Will Remove items like they never existed based on the id of the item in the array. */}
      >
        <View style= {{justifyContent: 'space-around', alignItems: 'flex-end', margin: 5}}>
          <Entypo name="circle-with-minus" color={'red'} size={30}
          />
        </View>
      </TouchableOpacity>

      <Image
      
      source={id.image}
      
      style={styles.ImageDisplay}
      />
      
      <Text>
        {id.dishName}
      </Text>
      <Text style={styles.descriptionText}>
        {id.description}
      </Text>
      <Text style={styles.baseLineText}>
        {id.courseName}
      </Text>
      <Text style={styles.baseLineText}>
        R{id.price}
      </Text>

      </View>))}
  </ScrollView>
 
      
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
courseContainer: {
  backgroundColor: 'blue',
  alignSelf: 'center'
},
disheContainer:{
  backgroundColor: '#00000',
  margin: 2.3,
  
},
descriptionText:{
  fontFamily: 'Inter',
  fontWeight: '500',
  alignSelf: 'flex-start',
  margin: 10,
},
heading:{
  fontSize: 35,
  fontFamily: 'Inter',
  fontWeight: '600',
  marginTop: 90,
  alignSelf: 'center',
  color: '#3b3838ff',
  width:'auto',
  borderBottomColor: '#ee9c9ce8',
  borderBottomWidth: 5,
  lineHeight: 70,
  alignItems: 'center',
  alignContent: 'center'
  
},
baseLineText:{
  fontSize: 5,
  fontWeight:'300',
  color: '#332d2dff'
},
heading2:{
  fontSize: 20,
  color: '#272424fff',
  fontWeight: '600'
},
addButton:{
  width: 76,
  height: 30,
  backgroundColor: '#fdfdfdff',
  margin: 2,
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
},
removeButton:{
  width: 76,
  height: 30,
  backgroundColor: '#ffffffff',
  margin: 2,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
},
buttonText: {
  alignSelf: 'center',
  margin: 5,
  fontWeight:'700',
  fontFamily: 'Roboto'
},
ImageDisplay: {
  width : 280,
  height: 120,
  borderRadius: 7,
  margin : 12,
  alignSelf: 'center'
  
},
theItemContainer: {
  height: 'auto', 
  width: 330, 
  padding: 3, 
  backgroundColor: '#e0d3c1e0',
  borderRadius: 20.,
  marginBottom:2,
  marginTop: 2, 
  alignSelf: 'center',
  margin:30,
},




});