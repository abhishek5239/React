import { Component } from "react";
import {actionApplyDiscount } from "../Actions/Action"
import { connect } from "react-redux";

class InputCoupenCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addCoupenCode: false,
            textDiscount: ""
        }
    }
    funSwapFlag = () => {
        this.setState((prev) => ({ addCoupenCode: !prev.addCoupenCode }))
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
            !this.state.addCoupenCode ? <button onClick={this.funSwapFlag} className="AddCounpenCode">Add Coupen code</button> : <div className="divInputText">
                <input type="text" onChange={this.discountText} value={this.state.textDiscount} />
                <buttton onClick={() => this.applyDiscount(this.props.product)} className="applyButton">Apply</buttton>
            </div>
        )
    }
}
const mapDistpatchToProps = (dispatch) => {
    return {
        addDiscount:(val)=>dispatch(actionApplyDiscount(val))
    }
}
export default connect(null,mapDistpatchToProps)(InputCoupenCode)