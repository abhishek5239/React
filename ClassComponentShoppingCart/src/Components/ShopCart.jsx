import { Component } from "react";
import { connect } from "react-redux";
import "../css/ShopCart.css"
import { actionRemoveProductFromCart, actionAddMultipleProductToCart,actionApplyDiscount } from "../Actions/Action"
import InputCoupenCode from "./InputCoupenCode";

class ShopCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addCoupenCode: false,
            textDiscount:""
        }
    }
 
    funIncreDecre = (val, obj) => {
        if (val === "incre") {
            this.props.addMultipleProductToCart({ ProductName: obj.productName, quantity: (obj.quantity + 1) })
        }
        if (val === "decre") {
            if (obj.quantity - 1 === 0) {
                this.props.removeProductFromCart(obj.productName)
            }
            else if (!(obj.quantity - 1 <= 0))
                this.props.addMultipleProductToCart({ ProductName: obj.productName, quantity: (obj.quantity - 1) })
        }
    }
    funTotatProduct=()=>{
        let totalQuantity=0;
        let totalAmount=0;
        let disocuntedAmount=0;
        this.props.productInCart.forEach(element => {
            totalQuantity+=element.quantity;
            totalAmount+=(element.quantity*element.amount)
            if(element.discount.discountApplied)
            {
                disocuntedAmount+=(element.discount.discountPercentage/100)*(element.amount*element.quantity)
            }
            
        });
        return{
            totalQuantity,
            totalAmount,
            disocuntedAmount
        } 
    }
    discountText=(e)=>{
        this.setState({textDiscount:e.target.value})

    }
    applyDiscount=(val)=>{
        if(val.discount.discountCode===this.state.textDiscount)
        {
            this.props.addDiscount(val.productName)
        }
        this.setState({textDiscount:""})

    }
    render() {
        return (
            this.props.productInCart.length > 0 ?
                <div className="divShopCart">
                    {
                        this.props.productInCart.map((val) => {
                            const totalAmount = (val.amount) * val.quantity;
                            return (
                                <div className="divProductBox">
                                    <div className="divProductImage">
                                        <img className="productImage" src={new URL(`../assets/${(val.productName).toLowerCase()}.jpg`, import.meta.url).href} alt="no img" />

                                    </div>
                                    <div className="ProductInfo">
                                        <h2>{val.productName}</h2>
                                        <span>{val.productBrief}</span>
                                        <div className="divAmount">
                                            <h4>{`Total: ${totalAmount}`}</h4>
                                            <div className="divIncrementQuantity">
                                                <button onClick={() => this.funIncreDecre("incre", val)} className="incre">+</button>
                                                <span>{val.quantity}</span>
                                                <button onClick={() => this.funIncreDecre("decre", val)} className="incre">-</button>
                                            </div>
                                        </div>
                                        <div className="divCoupnes">
                                            <InputCoupenCode product={val}/>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                    <div className="divBilling">
                        <h4>{`Total quantity:${this.funTotatProduct().totalQuantity} `}</h4>
                        <h4>{`Total Amount:${this.funTotatProduct().totalAmount} `}</h4>
                        <h4>{`Discounted Amount:${this.funTotatProduct().disocuntedAmount} `}</h4>
                        <h4>{`Final Amount:${this.funTotatProduct().totalAmount-this.funTotatProduct().disocuntedAmount} `}</h4>
                    </div>
                </div> : (<h1>Show for product</h1>)
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        productInCart: state.SelectedProducts
    }
}
const mapDistpatchToProps = (dispatch) => {
    return {
        addMultipleProductToCart: (val) => dispatch(actionAddMultipleProductToCart(val)),
        removeProductFromCart: (val) => dispatch(actionRemoveProductFromCart(val)),
        addDiscount:(val)=>dispatch(actionApplyDiscount(val))
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(ShopCart) 