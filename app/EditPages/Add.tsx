import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity, TextInput, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import { useRouter } from 'expo-router';
import React,{useState} from 'react';

/**This will allow the user to add images of the dishes  */
import * as ImagePicker from 'expo-image-picker';
import { useDishStore } from '@/functions/DishesEntries';// calling the function 
import { RadioButton } from 'react-native-paper';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { DishEntries } from '@/functions/DishesEntries';
import { Alert } from 'react-native';



const router = useRouter(); // function for navigation


export default function Added(){

  const addEntries = useDishStore((state) => state.addDishes) ;

  const [newPrice,setNewPrice] = useState(0);// prices will be stored here
    
  const [description, setDescription] = useState(''); // will stores th written description,

  const [dishName, setDishName] = useState('')//the dish name will be stored here 

  const [selectedCourse, setSelectedCourse] = useState('Entrée');//standardized the radio buttons 

  const [selectedImage, setSelectedImage] = useState<any>(null);// set image picker to an empty state

const handleAdd = () => {
  // storing the trimmed versions of the things in new variables so that they are easier to handle
  const trimmedDishName = dishName.trim();
  const trimmedDescription = description.trim();
  const trimmedCourse = selectedCourse.trim();
  const wordCount = trimmedDescription.split(/\s+/).length;// this is meant to sore the ammount of words here based on how many characters are grouped for new 

if (!trimmedDescription || !trimmedDishName || !selectedImage || !trimmedCourse || newPrice <= 0) {
  Alert.alert('Please enter all fields and ensure the price is valid.'); // error handling of 
  return;
}
if (wordCount < 50 || wordCount > 70) {
  Alert.alert('Description must be between 50 and 70 words.');//word limit checking so  that the description is not to long
  return;
}
  if (newPrice <= 0 || typeof newPrice !== 'number' ) {
  console.warn('Please enter a valid price.');
  return;
}



  const newDish: DishEntries = {
    id: 0, // started the id on zero
    dishName: trimmedDishName, 
    courseName: trimmedCourse,
    description: trimmedDescription,
    price: newPrice, // default price
    image: selectedImage, // URI string
    isDeleted: false,
  };

  addEntries(newDish);

  // Reset form fields
  setDescription('');
  setSelectedCourse('Entrée'); // made entree th default so the user can start
  setSelectedImage(null);
  setDishName('');
  setNewPrice(0)
};

    const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,//only allows images no other file types 
      allowsEditing: false,// does not let the user crop or adjust the image.
      quality: 1,//opens the image library on the device
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  }


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
            onPress={() => router.back()}>
              <View> 
                <Entypo name = "chevron-left" color={"#0fb333ff"} size={55}/>
              </View>
            </TouchableOpacity>
    
      {/**The button to access the add and remove functions. */}
      <View style={{flexDirection:'row', marginTop: 90, alignSelf: 'flex-end', marginEnd: 25,alignItems:'center'}}>
      <TouchableOpacity
      onPress={() => router.navigate('/EditPages/Add')}
      activeOpacity={0.6}
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



          

          <Text style={styles.heading}>Adding</Text>
  <View style = {styles.FormContainer}>
    
  <View style={{margin: 25.4,   }}> 



  <View style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
    <TouchableOpacity
    onPress={pickImage} >
    <View style={styles.imagePickerButton}>
      <Text>Add Image</Text>
    </View>
    </TouchableOpacity>

      <Image
      style = {styles.pickedImageDisplay}
      source={{uri: selectedImage}}
      />

</View >

          <View style={{flexDirection: 'row'}} >
            <Text style={{fontSize: 15}}>R</Text>
              <TextInput
              placeholder='Enter the Price R '
             onChangeText={(text) => setNewPrice(Number(text))}
              keyboardType='numeric'
              value={newPrice.toString()}
              style= {styles.PriceContainer}
              
              />
          </View>


                
                <TextInput placeholder='Add Dish name'
                value={dishName}
                onChangeText={setDishName}
                style={styles.dishNames}
                                
                />
<TextInput
  placeholder='Write a description that is at least 50 words long.'
  value={description}
  onChangeText={setDescription}
  multiline
  numberOfLines={5}
style={styles.theDescription}
/>

              {/**The radio button for the courses */}
              <View style = {{ flexDirection: 'row', height: 60, padding: 12}}>
                <RadioButton.Group
                onValueChange={(newValue) => setSelectedCourse(newValue)}
                value={selectedCourse}
                               
                
                >
                  <View style = {{ flexDirection: 'column', height: 60, padding:2, alignSelf:'flex-start'}}>
                  <RadioButton.Item label='Entrée' value='Entree' labelStyle= {styles.radioButtonGroup}/>
                  <RadioButton.Item label='Main' value='Main' labelStyle= {styles.radioButtonGroup}/>
                  <RadioButton.Item label='Dessert' value='Dessert' labelStyle= {styles.radioButtonGroup}/>
                  </View>
                </RadioButton.Group>
              </View>
</View>      
</View> 


        <View style={{flexBasis: 'auto', alignSelf: 'center', margin:10}}>
                <TouchableOpacity
                onPress={handleAdd}
                >
                  <View style= {{width:60, height: 60, backgroundColor: '#ebe0e0b4', borderRadius: 25, padding: 2, margin: 20, alignItems: 'center' }}>
                    <MaterialIcons name="add-circle" size={55} color={'#0a813ca2'}/>
                  </View>
                </TouchableOpacity>
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
  width: 76,
  height: 30,
  backgroundColor: '#ffffffff',
  margin: 2,
  borderTopLeftRadius:20,
  borderBottomLeftRadius:20,
},
removeButton:{
  width: 76,
  height: 30,
  backgroundColor: '#f7f6f6ff',
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
description: {
  width: 250,
  height: 150
},

imagePickerButton: {
  width: 95,
  height: 40,
  backgroundColor: '#d6c2c2ff',
  alignSelf: 'center', 
  borderRadius : 6,
  marginStart: 10,
  alignItems: 'center',
  padding: 10, 
}, 
pickedImageDisplay: {
  width : 140,
  height: 100,
  borderRadius: 7,
  
},

FormContainer: {
  height: 490, 
  width: 330, 
  padding: 3, 
  backgroundColor: '#f3b25ce0',
  borderBottomRightRadius: 20.,
  borderTopLeftRadius: 20,
  marginBottom:2 ,
  marginTop: 10, 
  alignSelf: 'center'
},
theDescription:{
  width: 270,
  height: 70,
  backgroundColor: '#c52b1d8c',
  borderRadius: 12,
  fontSize: 10.75
},
radioButtonGroup:{
  fontSize: 13,
  fontWeight: 'bold',
  fontFamily: 'monospace',
  alignItems: 'center',
  padding: 2
},
dishNames: {
  fontSize: 12,
  fontWeight: '700',
  fontStyle: 'italic',
  color: '#fff',
  margin: 3,
  backgroundColor: '#c52b1d70',
  padding: 5.7,
  height: 'auto',
  width: 150,
    borderRadius: 6,

},
PriceContainer:{
    height: 'auto',
  width: 150,
    backgroundColor: '#c52b1d6e',
  padding: 5.7,
  margin: 3,
      borderRadius: 6,
    marginBottom: 15



}


});