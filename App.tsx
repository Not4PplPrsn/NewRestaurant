import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput,FlatList } from 'react-native';
import {useState} from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from 'react';
let Dish = ({ id, name, description, price, onDelete, }: {
  id: string;
  name: string;
  description: string;
  price: number;
  onDelete: () => void;
}) =>(
  <View style = {styles.itemBox} >
    <Text>{name}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
    <TouchableOpacity onPress={onDelete} style= {styles.deletButton}>
      <Text onPress ={onDelete} >Delete</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [dishes, setDishes] = useState([
    { id: '1', name: 'Spaghetti', description: 'Delicious spaghetti with marinara sauce', price: 12.99 },
    { id: '2', name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing', price: 8.99 },
    { id: '3', name: 'Grilled Chicken', description: 'Juicy grilled chicken breast with herbs', price: 15.99 },
  ]);
   // State of input fields
   const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(''); 

    const addDish = () => {
      if (!name || !description || !price) return; // Simple validation
      const newDish = {
        id: (dishes.length + 1).toString(),
        name,
        description,
        price: parseFloat(price),
      }; 

      setDishes([...dishes, newDish]);
      // Clear input fields
      setName('');
      setDescription('');
      setPrice('');
    };
    const deleteDish = (id: string) => {
      setDishes(dishes.filter(dish => dish.id !== id));
    };
  function deleteUser(id: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ScrollView>

    <View style={styles.container}>
      <Text>Mere Brazier </Text>
      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style= {styles.input}
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
      <TouchableOpacity onPress={addDish}   style = {styles.box}>
        <Text style={{ color: 'Red' }}>Add Dish</Text>
      </TouchableOpacity> 

      <StatusBar style="auto" />
     <FlatList
        data={dishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Dish
            name={item.name}
            description={item.description}
            price={item.price}
            onDelete={() => deleteDish(item.id)} id={""}          />
        )}
      />
      
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c2f4a7e, #e8e3d9 , #c8102e',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'san-serif'},

  box : {
    backgroundColor: '#9e1140ff',
    borderRadius: 25, 
    padding: 10, 
    marginBottom: 20
    
  },
  deletButton:{
    paddingLeft : 15, 
    paddingRight: 15, 
    backgroundColor: '#2b11beff',
    borderRadius: 12, 
    fontWeight: 200,
  
  }, 
  itemBox: {
    borderWidth: 0.5,
    borderRadius: 15 , 
    backgroundColor: '#a49de431',
    padding: 15,
    shadowColor: "#570e0eff",
    flexWrap: 'wrap'
  },

  input: { 
        
    fontFamily:'san-serif',
   height: 40, 
   borderColor: 'gray', 
   borderWidth: 1, 
   marginBottom: 10, 
   width: 200, 
   paddingLeft: 5, 
   borderRadius: 15, 
  
    padding: 5.25

  }
  
});
