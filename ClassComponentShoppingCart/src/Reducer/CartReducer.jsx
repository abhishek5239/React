const initialState={
    products:[
        {
            id:1,
            productName:"Camera",
            amount:100,
            productBrief:"(Green, 12GB, 256GB Storage)",
            offerList:[
                "Apply counpen : Camera123 to get 10% off",
                "10% Instant Discount up to INR 1750 on BOBCARD EMI Trxn. Min purchase value INR 5000",
                "10% Instant Discount up to INR 1750 on HSBC Credit Card EMI Trxn. Min purchase value INR 5000"
            ],
            discount:{
                discountCode:"Camera123",
                discountPercentage:10,
                discountApplied:false
            }
            
        },
        {
            id:2,
            productName:"speaker",
            amount:300,
            productBrief:"(Green, 12GB, 256GB Storage)",
            offerList:[
                "Apply counpen : Speaker123 to get 12% off",
                "10% Instant Discount up to INR 1750 on BOBCARD EMI Trxn. Min purchase value INR 5000",
                "10% Instant Discount up to INR 1750 on HSBC Credit Card EMI Trxn. Min purchase value INR 5000"
            ],
            discount:{
                discountCode:"Speaker123",
                discountPercentage:12,
                discountApplied:false
            }
        },
        {
            id:3,
            productName:"Headphones",
            amount:500,
            productBrief:"(Green, 12GB, 256GB Storage)",
            offerList:[
                "Apply counpen : Headphone123 to get 13% off",
                "10% Instant Discount up to INR 1750 on BOBCARD EMI Trxn. Min purchase value INR 5000",
                "10% Instant Discount up to INR 1750 on HSBC Credit Card EMI Trxn. Min purchase value INR 5000"
            ],
            discount:{
                discountCode:"Headphone123",
                discountPercentage:13,
                discountApplied:false
            }
        }
    ],
    SelectedProducts:[],
    currentProductScreen:{}
}

 const cartReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "PRODUCT_LIST":
            return {
                ...state,
                currentProductScreen:{...action.Payload}
            }
e
        case "ADD_PRODUCT_TO_CART":
            return{
                ...state,
                SelectedProducts:[...state.SelectedProducts,action.Payload]
            }
        case "ADD_MULTIPLE_PRODUCT_TO_CART":
            return{
                ...state,
                SelectedProducts:state.SelectedProducts.map((val)=>{
                    if(action.Payload.ProductName===val.productName)
                        return {...val,quantity:action.Payload.quantity};
                    return val;
                })
            }
            case "REMOVE_PRODUCT_FROM_CART":
                return{
                    ...state,
                    SelectedProducts:state.SelectedProducts.filter((val)=>{
                        
                        return val.productName!==action.Payload
                    })
                }
                case "APPLY_DISCOUNT":
                    return{
                        ...state,
                        SelectedProducts:state.SelectedProducts.map((val)=>{
                            if(action.Payload===val.productName)
                            {
                                return {...val,discount:{...val.discount,discountApplied:true}}
                            }
                            return {...val}
                        })
                    }
            default:
                return state
    }
    
}
export default cartReducer