import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { RadioButton, Menu, Button, Provider as PaperProvider } from 'react-native-paper';

let Dish = ({ id, name, description, price, course, onDelete }: {
  id: string;
  name: string;
  description: string;
  price: number;
  course: string;
  onDelete: () => void;
}) => (
  <SafeAreaView > 
    <View style = {styles.itemBox} >
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
      <Text> {course}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deletButton} >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView> 
);

export default function App() {
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
  const [courseSelections, setCourseSelections] = useState<string[]>([]);
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

  const addDish = () => {
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

  const deleteDish = (id: string) => {
    setDishes(dishes.filter(dish => dish.id !== id));
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.Title}>Mere Brazier</Text>
        
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
        
        <Text style={{ marginBottom: 6, fontFamily: 'georgia' }}>Course</Text>
        
        {/* Dropdown Menu for Course Selection */}
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button 
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
            <Menu.Item
              key={courseOption}
              onPress={() => handleSelection(courseOption)}
              title={courseOption}
              style={styles.menuItem}
              titleStyle={styles.menuItemText}
            />
          ))}
        </Menu>

        <TouchableOpacity onPress={addDish} style={styles.box}>
          <Text style={styles.addButtonText}>Add Dish</Text>
        </TouchableOpacity> 

        <StatusBar style="auto" />

        <ScrollView>  
          <View style={{ justifyContent: 'space-between' }}> 
            <FlatList
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
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c2f4a7e',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'georgia',
    padding: 20,
  },
  box: {
    backgroundColor: '#115f9eff',
    borderRadius: 25, 
    padding: 4.2, 
    marginBottom: 20,
    height: 55,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
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
    alignContent: 'flex-start'
  },
  itemBox: {
    borderWidth: 0.5,
    borderRadius: 15, 
    backgroundColor: '#a49de431',
    padding: 15,
    shadowColor: "#570e0eff",
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: 300,
  },
  input: { 
    fontFamily: 'georgia',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 5, 
    width: 200, 
    paddingLeft: 10, 
    borderRadius: 15, 
    boxSizing: 'content-box',
    paddingRight: 10,
    backgroundColor: 'white',
  },
  dropdownButton: {
    width: 200,
    marginBottom: 5,
    borderColor: 'gray',
    borderRadius: 15,
    fontFamily: 'georgia',  
    backgroundColor: 'white',
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
    fontSize: 50,
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
    padding: 5,
    backgroundColor: '#7178ce33',
  },
});