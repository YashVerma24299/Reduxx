import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products',async()=>{
    // "products" (the ACTION TYPE prefix)
    // This string creates 3 automatic "actions":
    // 1️⃣ products/pending
    // 2️⃣ products/fulfilled
    // 3️⃣ products/rejected
    const res= await fetch('https://dummyjson.com/products?limit=194');
    const data = await res.json();
    console.log(data)
    console.log(data.products)
    return data.products;
})

const productsSlice = createSlice({
    name: 'products',
    initialState:{
        items:[],
        status:'idle', // api not called
        error:null
    },
    extraReducers:(yash)=>{
        yash.addCase(fetchProducts.pending, (state)=>{
            state.status='loading'
        });
        yash.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = 'succeeded',
            state.items = action.payload
        });
        yash.addCase(fetchProducts.rejected, (state, action)=>{
            state.status='failed',
            state.error= action.error.message
            console.log("Error happened:", action.error.message);
        });

    }
})


export default productsSlice.reducer;