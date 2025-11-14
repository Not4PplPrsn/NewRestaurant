import { useDishStore } from '@/functions/DishesEntries';
import { Image, ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
//
  
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { useTabBarInactivity } from '@/functions/AutoHidTabBar'; // calling the function  i made  in the functions folder
// The function for the scroll time out 
import { useContext } from 'react';



export default function HomeScreen() {
  const entries = useDishStore((state) => state.entries);
  /**stored the function in a new variable */
   const { onTouch } = useTabBarInactivity(); /**Calling the functions in need for the scroll view so the bottom tab will disappear */

  return (

      <ImageBackground
  source={require('../../assets/images/Backgrounds/RestaurantExterior.webp')/**(Rust en Vrede, 2025) */}
  style={[StyleSheet.absoluteFill,{opacity:60,} ]}
  >

  <LinearGradient
  colors={['#e2d8d879', '#c52b1db6']}
  start={{x:0.15, y:0.26}}
  end={{x:0.26, y:1.06}}
  style={[StyleSheet.absoluteFill, ]}
  />
      <Text style={styles.heading}>Welcome</Text>
    <ScrollView
    onTouchStart={onTouch}
        scrollEventThrottle={16}
    >


    <Text style={styles.heading2} >Entrées</Text>

  <View style={styles.courseContainer}>
    
    {entries/**(W3Schools, 2025) */
    
    .filter((entry) => entry.courseName === 'Entrée') /**Will Share based upon the course name */
    .slice(0,2)
    .map((entry) => (
      <View style={styles.dishContainer} key={entry.id}>
        <View>
          <Text style={styles.dishNames}>{entry.dishName}</Text>

          <Image source={
            entry.image
          }
            style={styles.dishImage}/>
        </View>
        <View >
        <Text style={styles.heading3}>Description</Text>
          <Text style={styles.descriptionText}>
            {entry.description}         
          </Text>
        </View>
        <View>
          <Text>R  {entry.price}</Text>
        </View>
        </View>
      ))}
      </View>


     <Text style={styles.heading2}>Mains </Text>
  <View style={styles.courseContainer}>

 
      
    {entries /**(W3Schools, 2025) */
    
    .filter((entry) => entry.courseName === 'Main')
    .slice(0,2)
    .map((entry) => (
      <View style={styles.dishContainer} key={entry.id}>
        <View>
          <Text style={styles.dishNames} >{entry.dishName}</Text>

          <Image source={
            entry.image
          }
            style={styles.dishImage}/>
        </View>
        <View >
        <Text style={styles.heading3}>Description</Text>
          <Text style={styles.descriptionText}>
            {entry.description}         
          </Text>
        </View>
        <View>
          <Text>R  {entry.price}</Text>
        </View>
        </View>
      ))}


      </View>

    <Text style={styles.heading2}>Desserts</Text>
  <View style={styles.courseContainer}>

    {entries
    
    .filter((entry) => entry.courseName === 'Dessert')
    .slice(0,2)
    .map((entry) => (
      <View style={styles.dishContainer} key={entry.id}>
        <View>
          <Text style={styles.dishNames}>{entry.dishName}</Text>

          <Image source={
            entry.image
          }
            style={styles.dishImage}/>
        </View>
        <View >
        <Text style={styles.heading3}>Description</Text>
          <Text style={styles.descriptionText}>
            {entry.description}         
          </Text>
        </View>
        <View>
          <Text>R  {entry.price}</Text>
        </View>
        </View>
      ))/**(W3Schools, 2025) */}
      </View>
      </ScrollView>
      
     </ImageBackground> 
 
  );
}

const styles = StyleSheet.create({
courseContainer: {
  backgroundColor: '#f1b93fff',
  alignSelf: 'center',
  marginBottom:15,
  width: 360,
   height: 'auto',
   padding: 5,
   borderTopRightRadius:20,
   borderBottomRightRadius:20,
   borderBottomLeftRadius:20,
   flexDirection: 'row'

  
},
dishContainer:{
  backgroundColor: '#00000',
  margin: 0.5,
  isolation:'isolate',
  width: 170,
  
  

  
  
},
descriptionText:{
  fontFamily: 'Inter',
  fontWeight: '500',
  alignSelf: 'flex-start',
  margin: 4,
  elevation: 8,
  fontSize: 9,
  width: 160,
  flexWrap:'wrap',
  justifyContent:'flex-start'
},
heading:{
  fontSize: 35,
  fontFamily: 'Inter',
  fontWeight: '600',
  margin: 20,
  alignSelf: 'center',
  color: '#3b3838ff',
  width: 150,
  borderBottomColor: '#ee9c9ce8',
  borderBottomWidth: 5,
  lineHeight: 70,

  
  
},
baseLineText:{
  fontSize: 5,
  fontWeight:'300',
  color: '#332d2dff'
},
heading2:{
  fontSize: 20,
  color: '#ffff',
  fontWeight: '600',
  marginTop: 30,
  marginBottom:3,
  marginStart: 16
},
textContainer:{
  
},
heading3:{
  fontFamily: 'Time New Roman'
},
dishImage:{
  width: 70,
  height: 75,
  alignSelf: 'flex-start',
  margin: 6,
  borderTopLeftRadius: 25.5,
  borderTopRightRadius: 25.5,
  borderBottomLeftRadius: 25.5,
  borderBottomRightRadius: 25.5
  
},
dishNames: {
  fontSize: 10,
  fontWeight: '700',
  fontStyle: 'italic',
  color: '#fff',
  marginTop: 0.05
}


});
