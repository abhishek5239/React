import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState={
    products:[
        {id:1,
            productName:"Headphones",
            money:300
        },
        {id:2,
            productName:"Racket",
            money:800
        },
        {id:3,
            productName:"Refrigerator",
            money:1000
        }
    ],
    selectProducts:[],
    listingVariable:{}
}


const shoppingSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{

        addSelectedItems:(state,action)=>{
            // console.log("actions are :" , action);
            for(let i in action.payload)
              { state.selectProducts.push(action.payload[i] )
                // console.log("hello",state.selectProducts[0]);
              }
              
            
            
        },
        addProducts:(state,action)=>{
            console.log("in the addproducts reducer" , action.payload);
            const prd={
                id:nanoid(),
                productName:action.payload.productName,
                money:action.payload.productAmount

            }
            state.products.push(prd)
        }


    }
})

export default shoppingSlice.reducer
export const {addSelectedItems,addProducts}=shoppingSlice.actions