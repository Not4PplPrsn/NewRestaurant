import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DishEntries, useDishStore,useCartStore } from '@/functions/DishesEntries';
import { Alert } from 'react-native';
import { use, useState } from 'react';
//This will be used in the check boxes for the dishes  
import { Checkbox, Menu, Provider as PaperProvider, Button } from 'react-native-paper';

  import { useTabBarInactivity } from '@/functions/AutoHidTabBar';
import { FontAwesome } from '@expo/vector-icons';

  export type CourseType = 'All' | 'Entrée'  | 'Main' | 'Dessert'; // the value for the filter







export default function DishSelection() {

     const { onTouch } = useTabBarInactivity(); /**Calling the functions in need for the scroll view so the bottom tab will disappear */
/**Standardizing all function and storage units for data sets */
  const { entries} = useDishStore();

 const addToCart = useCartStore((state) => state.addToCart);


const [selectedCourse, setSelectedCourse] = useState<CourseType>('All');/**(W3Schools, 2025) */

const [selectedItems, setSelectedItems] = useState<number[]>([]);
const [totalPrice, setTotalPrice] = useState(0);;/**(W3Schools, 2025) */
    const [menuVisible, setMenuVisible] = useState(false);/**(W3Schools, 2025) */


const courses: CourseType[] = ['All', 'Entrée', 'Main', 'Dessert']; /**(W3Schools, 2025) */

const filteredItems = entries.filter((dish) =>
  selectedCourse === 'All'
    ? !dish.isDeleted &&
      dish.dishName.trim() !== '' &&
      dish.description.trim() !== '' &&
      dish.price > 0 &&
      dish.image
    : dish.courseName === selectedCourse &&
      !dish.isDeleted &&
      dish.dishName.trim() !== '' &&
      dish.description.trim() !== '' &&
      dish.price > 0 &&
      dish.image
);

  const clearSelection = () => {
    setSelectedItems([]);
  };
  
const toggleSelection = (dish: DishEntries) => {
  const isSelected = selectedItems.includes(dish.id); /**This handle the selection by filtering item by id */
  let updatedSelection: number[]; /**Stpres the IDs of all selected items */

  if (isSelected) {
    updatedSelection = selectedItems.filter((id) => id !== dish.id);/**Does keep the selected item toggled  */
  } else {
    updatedSelection = [...selectedItems, dish.id]; /** stores selected item in a package  */
  }

  setSelectedItems(updatedSelection);

  // Recalculate total from selected items
  const newTotal = filteredItems
    .filter((item) => updatedSelection.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  setTotalPrice(newTotal);
};

const handleAddSelectedItems = () => {
  // Add selected dishes to cart using filteredItems
  entries.forEach((dish) => {
    if (selectedItems.includes(dish.id)) {
      addToCart(dish);
    }
  });

  // Reset selection and total
  setSelectedItems([]);
  setTotalPrice(0);

  Alert.alert('Success', 'Items added to cart.');
};



  return(

      <PaperProvider>
      <ImageBackground
      source = {require('../../assets/images/Backgrounds/TableSetting3.jpg')/**(thebarn_in_thefarm, 2025) */}
        style={[StyleSheet.absoluteFill,{opacity:60,} ]}

      
      >
        <LinearGradient
          colors={['#e2d8d879', '#c52b1db6']}
          start={{x:0.15, y:0.26}}
          end={{x:0.26, y:1.06}}
          style={[StyleSheet.absoluteFill, ]} /**(W3Schools, 2025) */
        
        />
        
            <Text style ={styles.heading}>
                Menu
            </Text>

<View style={{flexDirection : 'row'}} >
 <View style= {{margin:12}}>           
<Menu //(W3Schools, 2025)
        // this is when the button is inactive
          visible={menuVisible}// (The IIE, 2025)
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button //(W3Schools, 2025)
              mode="outlined" 
              onPress={() => setMenuVisible(true)}
              style={styles.dropdownButton}
              contentStyle={styles.dropdownButtonContent}
              
            >
              {selectedCourse || 'Select Course'} 
            </Button>
          }
          

            

          style={styles.menu}
        >
          {courses.map((course,index)=> (
            <Menu.Item
            key={course}
            title={course}
            style={styles.menuItem}
            titleStyle={styles.menuItemText}
              onPress={() => {
            setSelectedCourse(course as CourseType);
            setTimeout(() => setMenuVisible(false), 150); // closes after 150ms
 //  update selected course
    }}
            />     
            ))}
        </Menu>
        </View>

        <View style={{ alignSelf: 'flex-start', height: 'auto', width: 'auto', padding:0.0005, backgroundColor: '#f05d5dff', borderRadius: 6 , margin: 20, }}>
            <Text style={{backgroundColor: '#eed1acff', margin: 8, borderRadius:10, height: 40, width:90, fontSize: 10, padding: 10 }}>   
              R {totalPrice.toFixed(2)}
            </Text>
        </View>
        
        </View>


        <View style = {{justifyContent: 'space-around', }}>
            <TouchableOpacity
            onPress={ handleAddSelectedItems} // called the function so the onpress knows what logic to use when adding 
            style={{alignSelf: 'flex-start'}}
            >
              <View  style ={ styles.buttonAdd}>
                <Text style={styles.buttonText}>
                <Text style ={{paddingEnd: 20}}><FontAwesome name="opencart" size={20} color="#c97f1f"  style={{margin: 20}}/></Text>
                         Add 
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={clearSelection}
            >
              <View style ={ styles.buttonReset}>
                <Text style={styles.buttonText}>
                  Reset
                </Text>
              </View>
            </TouchableOpacity>
        </View>



<View>

<ScrollView
        onTouchStart={onTouch} // this will remove the bottom tab from the bottom screen so the user can read the content fully

        contentContainerStyle= {{ paddingBottom: 50}}

>
  <View >
  <FlatList
  data={filteredItems}
  renderItem={({ item }) => {
    const isSelected = selectedItems.includes(item.id);

    return (
      <TouchableOpacity onPress={() => toggleSelection(item)}
      style= {{ justifyContent: 'space-between'}}>
        <View style={{ flexDirection: 'column', alignItems: 'center', padding: 6.5, width: 250, height: 270,  }}>
         <View style={{alignSelf:'flex-end'}}><Checkbox
            status={isSelected ? 'checked' : 'unchecked'}
            onPress={() => toggleSelection(item)}
          
          /></View> 
          <View style={{ marginLeft:25,width:250, borderRadius: 15, }}>
            <ImageBackground
            source={item.image}
            style = {[StyleSheet.absoluteFill, {opacity: 60 }]}
            
            />
            <Text style={styles.heading2}>{item.dishName}</Text>
           
            <Text style = {styles.PriceContainer}>R{item.price.toFixed(2)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }}

  keyExtractor={(item) => item.id.toString()/**(W3Schools, 2025) */} // turns all items into string form
/></View>

  
</ScrollView>         


</View>



</ImageBackground>
</PaperProvider>
    );
}


const styles = StyleSheet.create({
  descriptionText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    alignSelf: 'flex-start',
    margin: 10,
  },
  heading: {
    fontSize: 35,
    fontFamily: 'Inter',
    fontWeight: '600',
    marginTop: 20,
    alignSelf: 'center',
    color: '#3b3838ff',
    width: 'auto',
    borderBottomColor: '#ee9c9ce8',
    borderBottomWidth: 5,
    lineHeight: 70,
    alignItems: 'center',
    alignContent: 'center',
  },
  heading2: {
    fontSize: 13,
    color: '#b89826ff', // fixed invalid hex
    fontWeight: '600',
    backgroundColor: '#eee5e5ab',
    width: 140,
    height: 'auto',
    margin: 20,
    
  },
  theItemContainer: {
    height: 'auto',
    width: 'auto',
    padding: 3,
    backgroundColor: '#f3b25ce0',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 2,
    marginTop: 2,
    alignSelf: 'center',
    margin: 5,
  },
  ImageDisplay: {
    width: 280,
    height: 120,
    borderRadius: 7,
    margin: 12,
    alignSelf: 'center',
  },
  PriceContainer: {
    height: 'auto',
    width: 150,
    backgroundColor: '#c52b1d6e',
    padding: 5.7,
    margin: 3,
    borderRadius: 6,
    marginBottom: 15,
  },
  selectedContainer: {
    borderColor: '#3ad63494',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 4,
    color: '#333',
  },
  radioLabelSelected: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
    dropdownButton: {
    width: 160,
    marginBottom: 20,
    borderColor: 'gray',
    borderRadius: 15,
    fontFamily: 'georgia',  
    backgroundColor: 'white',
    height: 45.8,
    fontSize:15
  },
    dropdownButtonContent: {
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  },
  menu: {
    marginTop: 40,
    width: 200,
  },
  menuItem: {
    paddingVertical: 8,
    margin: 10,
    backgroundColor: '#c7825aff',
    borderRadius: 5.75
  },
  menuItemText: {
    fontFamily: 'monospace'},

    buttonReset:{
      backgroundColor: '#d60e0eff',
      borderRadius: 10,
      padding: 5,
      margin: 10,
      width: 60,
      height: "auto"
    
    },
        buttonAdd:{
      backgroundColor: '#0e2cd6ff',
      borderRadius: 10,
      padding: 5,
      margin: 10,
      width: 'auto',
      height: "auto"

    
    },
    buttonText: {
      color: '#ffff',
      fontSize: 16,
      fontFamily: 'monospace',
      letterSpacing:0.25

    }



});