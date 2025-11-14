import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{use, useState} from 'react';

// The function for the items 
import { useDishStore } from '@/functions/DishesEntries';

import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { dishes } from '@/functions/theDishArray';

const router = useRouter();





export default function Redact(){
const removeItems = useDishStore ((state) => state.removeDishes); // deleted items
const entries = useDishStore ((state) => state.entries )


    return(
  <ImageBackground
  source={require('../../assets/images/Backgrounds/TableSetting2.jpg')/**(thebarn_in_thefarm, 2025) */}
        style={[StyleSheet.absoluteFill,{opacity:20} ]}

  
  >
      <LinearGradient
  colors={['#e2d8d898', '#e06e11a9']}
    start={{x:0.15, y:0.26}}
  end={{x:0.26, y:1.06}}

      style={[StyleSheet.absoluteFill,{opacity:20} ]}


 />
         <TouchableOpacity
        onPress={() => router.back()} /**This will return the user to the next screen  */> 
          <View> 
            <Entypo name = "chevron-left" color={"#0fb333ff"} size={55}/>
          </View>
        </TouchableOpacity>


      {/**The button to access the add and remove functions. */}
      <View style={{flexDirection:'row', marginTop: 20, alignSelf: 'flex-end', marginEnd: 25,alignItems:'center'}}>
      <TouchableOpacity
      onPress={() => router.navigate('/EditPages/Add')}
      >
        <View style={styles.addButton}>
          <Text style={styles.buttonText} >Add</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => router.navigate('/EditPages/Redact')}
      >
        <View style={styles.removeButton}>
          <Text style={styles.buttonText}>Remove</Text>
        </View>
      </TouchableOpacity>
      </View>
          <Text style={styles.heading}>Editing</Text>

      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      style= {{ height: 'auto', width : 'auto'}}
      >
          
    {entries.map((dish) => ( /**The display for the array items so the user can see the items they wish to delete */

      <><View style = {{flexDirection: 'column' , marginLeft: 30}}
      key={dish.id}>
      <View style={styles.theItemContainer}>


        <Image
          aria-label='Dish Images'
          source={dish.image} 
          style={styles.ImageDisplay}/>

        <View>
          <Text style={styles.heading2}>Dish Name</Text>
          <Text>{dish.dishName}</Text>
        </View>

        <View>
          <Text style={styles.heading2}>Description</Text>
          <Text>{dish.description}</Text>
        </View>

        <View>
          <Text style={styles.heading2}>Course</Text>
          <Text>{dish.courseName}</Text>
        </View>
        <Text>R{dish.price}</Text>
      </View>
      
      <View style={{ flexBasis: 'auto', alignSelf: 'center', margin:3 }}>
          <TouchableOpacity
            onPress={() => removeItems(dish.id)
              
            }
          >
            <View style={{ width: 45, height: 45, backgroundColor: '#ebe0e0b4', borderRadius: 25, padding: 2, margin: 5, alignItems: 'center' }}>
              <MaterialIcons name="remove-circle" size={40} color={'#da2846a2'} />
            </View>
          </TouchableOpacity>
        </View></View>
        </>
      ))}
      </ScrollView>

      
      



      

      
      </ImageBackground>
    );
}


const styles = StyleSheet.create({

heading:{
  fontSize: 35,
  fontFamily: 'Inter',
  fontWeight: '600',
  marginTop: 10,
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
  fontSize: 13,
  color: '#fff',
  fontWeight: '600',
  margin: 10

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
theItemContainer: {
  height: 'auto', 
  width: 330, 
  padding: 3, 
  backgroundColor: '#f3b25ce0',
  borderBottomRightRadius: 20.,
  borderTopLeftRadius: 20,
  marginBottom:2,
  marginTop: 2, 
  alignSelf: 'center',
  margin:5,
},
ImageDisplay: {
  width : 280,
  height: 120,
  borderRadius: 7,
  margin : 12,
  alignSelf: 'center'
  
},



});