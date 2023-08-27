import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    items : [
        {
            id:1,
            title: "Meditate",
            img : "https://img.freepik.com/free-vector/female-doing-yoga-meditation-mandala-background_1017-38763.jpg?w=826&t=st=1692905684~exp=1692906284~hmac=f7589bd94edaa6d36507eb1c259007cc705555c0df5014e3e4a6f7f6666c116c",
            color: "#5375d9",
            border : "#dadada",
        },
        {
            id:2,
            title: "Drink Water",
            img : "https://img.freepik.com/free-vector/drinking-water-concept-illustration_114360-10998.jpg?w=826&t=st=1692905888~exp=1692906488~hmac=bc6fbe0e74d0c521a370a92bef15799b780f4b376f895bf7adec908ccab6cb17",
            color: "#5375d9",
            border : "#dadada",
        },
        {
            id:3,
            title: "Running",
            img : "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2085&q=80",
            color: "#0a589a",
            border : "#9f958a",
        },
        {
            id:4,
            title: "Workout",
            img : "https://img.freepik.com/free-photo/couple-training-together-gym_651396-1076.jpg?w=996&t=st=1692906021~exp=1692906621~hmac=9801b9a4053071f6e6496445b0d2e7a126d088fc67f5b37ee80d7dc5193dba4c",
            color: "#fff",
            border : "#5375d9",
        },
        {
            id:5,
            title: "Gaming",
            img : "https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529420.jpg?w=900&t=st=1692906110~exp=1692906710~hmac=1f196eddebf77c1dc6d7099337cef5c71c17176ef348579c598ded44ab0b072c",
            color: "#fe8068",
            border : "#1f1096",
        },
    ],
}
const ItemSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
            addItemToList: (state, action) => {
              const newItem = action.payload;
              const uniqueId = uuidv4(); 
              state.items.unshift({ ...newItem,id: uniqueId});  
        },
        removeItemFromList: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item.id !== itemId);
          },
          editItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                Object.assign(existingItem, action.payload);
            }
        },
    }
})
export const { addItemToList,removeItemFromList,editItem} = ItemSlice.actions;
export const selectItems = state => state.products.items;
export default ItemSlice.reducer;