import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{useState} from 'react';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTabBarInactivity } from '@/functions/AutoHidTabBar'; // calling the function  i made  in the functions folder





const router = useRouter();

import { useDishStore, } from '@/functions/DishesEntries';
import { Checkbox, Provider as PaperProvider } from 'react-native-paper';


export default function Bin(){
     const { onTouch } = useTabBarInactivity(); /**Calling the functions in need for the scroll view so the bottom tab will disappear */

  const recycleBin = useDishStore((state) => state.bin)
  
  const restoreItems= useDishStore((state) => state.restoreDish )

  const [selectedDish, setSelectedDish] = useState<number[]>([])

  const handleRestoration =() => {

  }

    return(
  <ImageBackground
  source={require('../../assets/images/Backgrounds/TableSetting3.jpg')/**(thebarn_in_thefarm, 2025) */}
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
        </TouchableOpacity>


          <Text style={styles.heading}>Deleted Items</Text>

        <ScrollView 
            contentContainerStyle = {{ justifyContent: "space-around"}}

        >
    {recycleBin.map((id) => (
      <View key={id.id} style={styles.theItemContainer}>
        <Image
        source={id.image}
        style={styles.ImageDisplay}

        />
        <Text>{id.dishName}</Text>
        <Text style={styles.descriptionText} >{id.description}</Text>
        <Text style={styles.baseLineText}>R  {id.price}</Text>

      <TouchableOpacity
      onPress={() => restoreItems(id.id)}
      >
        <View>
          <Entypo name='back' color={"#1779e9ff"} size={30}/>
        </View>
      </TouchableOpacity>
      </View>
    
      
    
    ))}
    </ScrollView>

      
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
  
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
  margin: 40,
  alignSelf: 'center',
  color: '#3b3838ff',
  width:'auto',
  borderBottomColor: '#ee9c9ce8',
  borderBottomWidth: 5,
  lineHeight: 70,
  alignItems: 'center',
  alignContent: 'center',
  
},
baseLineText:{
  fontSize: 10,
  fontWeight:'500',
  color: '#110101ff',
  fontFamily: 'arial',
  
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
ImageDisplay: {
  width : 280,
  height: 120,
  borderRadius: 7,
  margin : 12,
  alignSelf: 'center'
  
},




});