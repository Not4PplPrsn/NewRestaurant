import { create } from 'zustand';// allow for the transfer of these functions between the typescript files 
import { dishes } from './theDishArray';// these are the items which are
import { Trash } from './DeletedDishes';
 import { Cart } from './Cart';
 import { CourseType } from '@/app/(tabs)/Select';
 

export type DishEntries = { /**(W3Schools, 2025)  (Robin, 2022)*/  // The kinds of the information that can fill the array elements
  id: number;
  dishName: string;
  courseName: string;
  description: string;
  price: number;
  image: any;
  isDeleted: boolean;
};

type DishStore = { /**(Robin, 2022) */
  bin: DishEntries[];
  entries: DishEntries[];//the package for the entries 
  addDishes: (entry: DishEntries) => void; // sub function being set to an empty state
  removeDishes: (id: number) => void; // sub function being set to an empt
  getByCourse: (courseName: CourseType) => DishEntries[]; // setting the filtering empty filtering
  getTotal: (price: number) => void;
  restoreDish: (id: number) => void 
  
};

export const useDishStore = create<DishStore>((set, get) => ({/**(W3Schools, 2025)  (Robin, 2022)*/ 
  entries: dishes,
  bin: Trash,
  addDishes: (entry) => {/**(Robin, 2022) */
    const currentEntries = get().entries;//retrieve current entries 
    const alreadyExists = currentEntries.some(
      (dish) => dish.dishName === entry.dishName
    );

    if (alreadyExists) return; /**(Robin, 2022) */

    const newEntry = { ...entry, isDeleted: false } /**Items which have been added will start as false for the is deleted button  */;

    const updated = [newEntry, ...currentEntries]; /**Adds item to the current array  */

    const reordered = updated.map((dish, index) => ({
      ...dish,
      id: index + 1,//this reorders the array such that all items that are added come first and allows the user to add new item if it does ont exist
    }));

    set({ entries: reordered }/**Will return the reorder array */);
  },


removeDishes: (id) => /**(Robin, 2022) */
  set((state) => { /**Soft delete */
    const dishToDelete = state.entries.find((dish) => dish.id === id) /**find the array items using id  */;
    if (!dishToDelete) return state;

    const updatedDish = { ...dishToDelete, isDeleted: true } /**When this the items is deleted it will its boolean will changed to true */;

    return {
      entries: state.entries.filter((dish) => dish.id !== id)/**This will filter  */,
      bin: [...state.bin ?? [], updatedDish] /**After the filter it will remove from the entries array and update the bin */,
    };
  }), 
  
  getTotal: () => { /**(Robin, 2022) */
    const { entries } = get(); // take the items from the entries array for future use
    return entries.reduce((acc, dish) => acc + dish.price, 0)/**shows the sum of all the array item price attributes  */;
  }, 



getByCourse: (courseName) => {
  const { entries } = get();


  // Normalize accented and inconsistent course names
  const normalized = courseName.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); /**(Robin, 2022) */

  return entries.filter( /**(Robin, 2022) */
    (dish) =>
      dish.courseName.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === normalized &&
      !dish.isDeleted
  );
},

restoreDish: (id: number) => { /**(Robin, 2022) */
  const { bin, entries } = get();// retrieves the items from the Trash array 

  const dishToRestore = bin.find((dish) => dish.id === id); //locates the item from the bin array using id
  if (!dishToRestore) return;

  const restoredDish = { ...dishToRestore, isDeleted: false };// changes the the deleted marker to not deleted 

  const updatedEntries = [restoredDish, ...entries];
  const reorderedEntries = updatedEntries.map((dish, index) => ({
    ...dish,
    id: index + 1,
  })); // adds the items back into the array but att the top of the list

  const updatedBin = bin.filter((dish) => dish.id !== id); // find the item it will delete based on the id.

  set({ /**(Robin, 2022) */
    entries: reorderedEntries,
    bin: updatedBin, 
    /**updates the dish and bin array to their new form */
  });
},



}));


type CartItems={ //Attribute for the cart array /**(Robin, 2022) */
   id: number;
  dishName: string;
  courseName: string;
  description: string;
  price: number;
  image: any;
  isDeleted: boolean;
}

type CartStore = { // Attribute for the useCartStore Function /**(Robin, 2022) */
 cart: CartItems[];
 addToCart: (entry: CartItems)=> void;
 removeFromCart: (id: number) => void;
 clearCart: () => void
 getTotal: (price: number) => void;


}




export const useCartStore = create<CartStore>((set, get) => ({ /**(Robin, 2022) */
  cart: [],/**(Robin, 2022) */
addToCart: (dish: DishEntries) => {    /**(Robin, 2022) *//**This will Take from the rest of DishEntries array attribute a */
  set((state) => {
    const alreadyInCart = state.cart.some((item) => item.id === dish.id)/**Check if the items exist in he cart array  */;
    return alreadyInCart
      ? {} // do nothing if already in cart
      : { cart: [...state.cart, dish] } /**Will add in the cart  array from the dish array and with cart attributes and update it  */;
  });
},

  removeFromCart: (id) => { /**(Robin, 2022) */
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)//filter through the array to find the items id ,
    }));
  },

  clearCart: () => set({ cart: [] }), // will clear all items in the cart 

    getTotal: () => {
    const { cart } = get(); // This will add the prices of the selection
    return cart.reduce((acc, item) => acc + item.price, 0);
  },

}));