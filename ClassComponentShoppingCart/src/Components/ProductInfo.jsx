import { Component } from "react";
import { connect } from "react-redux";
import "../css/ProductInfo.css"
import NavigateWrapper from "../Wrapper/NavigateWrapper"
import {actionAddProductToCart,actionAddMultipleProductToCart} from "../Actions/Action"
class ProductInfo extends Component{

    constructor(props){
        super(props)
    }

    funAddToCart=()=>{

        let arr=this.props.productInCart.filter((val)=>{
                return val.productName===this.props.productInfo.productName;
        })
        console.log("array length",arr.length);
        if(arr.length>0)
        {
            const qnt=(arr[0].quantity)+1;
            console.log("hello",qnt,this.props.productInCart)
            this.props.addMultipleProductToCart({ProductName:this.props.productInfo.productName,quantity:qnt})
        }
        else 
        this.props.addProductToCart({...this.props.productInfo, quantity:1})
        this.props.navigate(-1);
    }

    funBuyNow=()=>{
        let arr=this.props.productInCart.filter((val)=>{
            return val.productName===this.props.productInfo.productName;
    })
    if(arr.length===0)
    {
        this.props.addProductToCart({...this.props.productInfo, quantity:1})

    }
    console.log("my cart",this.props.productInCart)
        this.props.navigate('/ShopCart')
    }

    render()
    {
        return (
            <div className="divProduct">
                <div className="divProductImage">
                <img className="productInfoImage" src={new URL(`../assets/${(this.props.productInfo.productName).toLowerCase()}.jpg`, import.meta.url).href} alt="no img" />
                </div>
                <div className="divProductInfo">
                    <div className="productInfo">
                        <h2>{this.props.productInfo.productName}</h2>
                        <h4>{this.props.productInfo.productBrief}</h4>
                    </div>
                    <div className="buyButton">
                        <button onClick={()=>this.funAddToCart()} className="ProductInfoButton" >Add to Cart</button>
                        <button onClick={()=>this.funBuyNow()} className="ProductInfoButton">Buy Now</button>
                    </div>
                    <h4>Offers:</h4>
                    <div className="divOffer">
                        {
                            this.props.productInfo.offerList.map(val=>{
                                return(
                                    
                                    <div className="divOfferBox">
                                    <p>{val}</p>
                                    </div>
                                    

                                
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
        productInfo:state.currentProductScreen,
        productInCart:state.SelectedProducts
    }
}

const mapDistpatchToProps=(dispatch)=>{
    return{
       addProductToCart:(val)=>dispatch(actionAddProductToCart(val)),
       addMultipleProductToCart:(val)=>dispatch(actionAddMultipleProductToCart(val))
    }
}
export default connect(mapStateToProps,mapDistpatchToProps)(NavigateWrapper(ProductInfo));