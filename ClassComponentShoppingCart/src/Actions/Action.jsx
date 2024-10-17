export const actionProductInfoList = (value)=>{
    return {
        type:"PRODUCT_LIST",
        Payload:value
    }
}

export const actionAddProductToCart =(value)=>{
    return {
        type:"ADD_PRODUCT_TO_CART",
        Payload:value
    }
}

export const actionAddMultipleProductToCart =(value)=>{
    return {
        type:"ADD_MULTIPLE_PRODUCT_TO_CART",
        Payload:value
    }
}
    export const actionRemoveProductFromCart =(value)=>{
        return {
            type:"REMOVE_PRODUCT_FROM_CART",
            Payload:value
        }
    }
        export const actionApplyDiscount =(value)=>{
            return {
                type:"APPLY_DISCOUNT",
                Payload:value
            }
            
}