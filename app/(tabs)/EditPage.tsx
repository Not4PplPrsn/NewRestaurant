import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{useState} from 'react';
const router = useRouter();

export default function Edit(){
    return(/**(W3Schools, 2025) */
  <ImageBackground
  source={require('../../assets/images/Backgrounds/TableSetting3.jpg')/**(thebarn_in_thefarm, 2025) */}
        style={[StyleSheet.absoluteFill,{opacity:20} ]} 

  
  >
      <LinearGradient
  colors={['#e2d8d898', '#e06e11a9']}
    start={{x:0.15, y:0.26}}
  end={{x:0.26, y:1.06}}

      style={[StyleSheet.absoluteFill,{opacity:20} ]}/**(W3Schools, 2025) */


 />

  


          <Text style={styles.heading}>Editing</Text>
    
    {/**The button to access the add and remove functions. */}
      <View style={{flexDirection:'row', alignSelf: 'center', margin: 195,alignItems:'center'}}>
      <TouchableOpacity
      onPress={() => router.push('/EditPages/Add')}
      >
        <View style={styles.addButton}>
          <Text style={styles.buttonText} >Add</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => router.push('/EditPages/Redact')}/**(W3Schools, 2025) */
      >
        <View style={styles.removeButton}>
          <Text style={styles.buttonText}>Remove</Text>
        </View>
      </TouchableOpacity >
      </View>
      
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
  marginTop: 20,
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
  width: 180,
  height: 40,
  backgroundColor: '#fdfdfdff',
  margin: 2,
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
},
removeButton:{
  width: 180,
  height: 40,
  backgroundColor: '#ffffffff',
  margin: 2,
  borderTopRightRadius: 20,
  borderBottomRightRadius: 20,
},
buttonText: {
  alignSelf: 'center',
  margin: 5,
  fontWeight:'700',
  fontFamily: 'monospace'
},



});
