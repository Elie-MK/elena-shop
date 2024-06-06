import { productItem } from "@/Utils/DummyDB";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartItem extends productItem {
    quantity: number;
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productItem>) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },

        reduceItem:(state, action: PayloadAction<productItem>)=>{
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                if(existingItem.quantity > 1){
                    existingItem.quantity -= 1;
                }else{
                    state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                }
            }
        },

        removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
    },
});

export default CartSlice.reducer

export const { addToCart, reduceItem,  removeFromCart} = CartSlice.actions

