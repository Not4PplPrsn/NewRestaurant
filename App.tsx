import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'; // (The IIE, 2025)
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Picker } from '@react-native-picker/picker';

//components for the menu  for the course selection
import { RadioButton, Menu, Button, Provider as PaperProvider } from 'react-native-paper'; // (The IIE, 2025)
// This allow for the use of gradients 
import { LinearGradient } from 'expo-linear-gradient';

//The array and the attributes which it houses 
let Dish = ({ id, name, description, price, course, onDelete }: {// (The IIE, 2025)
  id: string;
  name: string;
  description: string;
  price: number;
  course: string;
  onDelete: () => void;
}) => (
  // what will be shown in the flat list/ array
  // (The IIE, 2025)
  <SafeAreaView > 
    <View style = {styles.itemBox} >
      <Text>{name}</Text>
      <Text style={{borderWidth:0, backgroundColor:'#ffff', borderRadius:3.5, flexWrap:'wrap', padding:5, width:196, marginTop:5.8, marginBottom:5.8, fontSize:10}}>{description}</Text>
      <Text>{price}</Text>
      <Text> {course}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deletButton} >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView> 
);

export default function App() { // (The IIE, 2025)
  //Presen Array items 
  const [dishes, setDishes] = useState([
    { id: '1', name: 'Spaghetti', description: 'Delicious spaghetti with marinara sauce', price: 12.99, course: 'Main' },
    { id: '2', name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing', price: 8.99, course: 'Appetizer' },
    { id: '3', name: 'Grilled Chicken', description: 'Juicy grilled chicken breast with herbs', price: 15.99, course: 'Main' },
    { id: '4', name: 'Chocolate Cake', description: 'Rich chocolate cake with ganache frosting', price: 6.99, course: 'Dessert' }, 
    { id: '5', name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', price: 7.99, course: 'Appetizer' },
    { id: '6', name: 'Lemonade', description: 'Freshly squeezed lemonade', price: 3.99, course: 'Beverage' },
  ]);

  // State of input fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');
  const [courseSelections, setCourseSelections] = useState<string[]>([]);//(W3Schools, 2025)
  const [menuVisible, setMenuVisible] = useState(false);

  // Course options
  const courseOptions = [
    'Appetizer',
    'Main Course', 
    'Dessert',
    'Beverage',
    'Side Dish',
    'Salad',
    'Soup'
  ];

  const handleSelection = (selectedCourse: string) => {
    setCourse(selectedCourse);
    setMenuVisible(false);
    if (selectedCourse && !courseSelections.includes(selectedCourse)) {
      setCourseSelections(prev => [...prev, selectedCourse]);
    }
  };

  const addDish = () => { // (The IIE, 2025)
    //iteration is increase the id number everytime and item is entered 
    if (!name || !description || !price || !course) return; // Simple validation
    const newDish = {
      id: (dishes.length + 1).toString(),
      name,
      description,
      price: parseFloat(price),
      course,
    }; 

    setDishes([...dishes, newDish]);
    // Clear input fields
    setName('');
    setDescription('');
    setPrice('');
    setCourse('');
  };
// allow the delete button to not only delete the id but also delete the items associated with the id
  const deleteDish = (id: string) => {// (The IIE, 2025)
    setDishes(dishes.filter(dish => dish.id !== id));
  };

  return (
    //Essential for the making of the menua
    <PaperProvider>
      <LinearGradient //(W3Schools, 2025)
          colors={['#1c2f4a','#e8e3d9', '#c8102e']}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      >
        
      
      <View style={styles.container}>
        <Text style={styles.Title}>Christoffel's Barne</Text>
        <View  style= {styles.inputsAndDropDownForBorder}>
        <TextInput
          placeholder="Dish Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={styles.input}
        />
        
        
        {/* Dropdown Menu for Course Selection */}
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
              {course || 'Select Course'} 
            </Button>
          }
          style={styles.menu}
        >
          {courseOptions.map((courseOption, index) => (
            <Menu.Item //(W3Schools, 2025) 
              key={courseOption}
              onPress={() => handleSelection(courseOption)}
              title={courseOption}
              style={styles.menuItem}
              titleStyle={styles.menuItemText}
            />
          ))}
        </Menu>

        <TouchableOpacity onPress={addDish} style={styles.box}>// (The IIE, 2025)
          <Text style={styles.addButtonText}>Add Dish</Text>
        </TouchableOpacity>
        </View> 

        <StatusBar style="auto" />

        <ScrollView>  
          <View style={{ justifyContent: 'space-between', padding:2 }}> 
            <FlatList
            style={{flexWrap:'wrap'}}
              data={dishes}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Dish
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  course={item.course}
                  onDelete={() => deleteDish(item.id)}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
      </LinearGradient>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({ // (The IIE, 2025)
  container: {
    flex: 1,
    backgroundColor: '#4ecbeb7e',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'georgia',
    padding:30,
  },
  box: {
    backgroundColor: '#115f9eff',
    borderRadius: 25, 
    padding: 4.2, 
    marginBottom: 20,
    height: 45,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    margin: 22
  },
  addButtonText: {
    color: 'white',
    fontFamily: 'georgia',
    fontSize: 16,
  },
  deletButton: {
    paddingTop: 5, 
    paddingBottom: 5,
    paddingLeft: 15, 
    paddingRight: 15, 
    backgroundColor: '#2b11beff',
    borderRadius: 6.5, 
    fontWeight: '100',
    fontFamily: 'georgia',
    marginTop: 10,
    alignItems: 'baseline',
    fontSize: 10,
    
  },
  itemBox: {
    borderWidth: 0,
    borderRadius: 15, 
    backgroundColor: '#2c93d8ff',
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:6.5,
    shadowColor: "#570e0eff",
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: 260,
  },
  input: { 
    fontFamily: 'georgia',
    height: 15, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 5, 
    width: 200, 
    paddingLeft: 5, 
    borderRadius: 15, 
    boxSizing: 'content-box',
    paddingRight: 10,
    backgroundColor: 'white',
  },
  dropdownButton: {
    width: 160,
    marginBottom: 10,
    borderColor: 'gray',
    borderRadius: 15,
    fontFamily: 'georgia',  
    backgroundColor: 'white',
    height: 45.8,
    fontSize:15
  },
  dropdownButtonContent: {
    justifyContent: 'space-between',
  },
  menu: {
    marginTop: 40,
    width: 200,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuItemText: {
    fontFamily: 'georgia',
  },
  flatlist: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'georgia',
    color: '#333',
    textAlign: 'center',
  },
  radioWithLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    borderRadius: 10,
    padding: 50,
    backgroundColor: '#7178ce33',
  
  },
   inputsAndDropDownForBorder:{
    margin: 20,
    paddingInline: 10,
    backgroundColor: '#eef2f5cb',
    alignItems: "center",
    height:330,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom:20,
shadowOffset: {
  width: 5,
  height: 6,
},
shadowOpacity:  0.21,
shadowRadius: 6.65,
elevation: 9

   },

});