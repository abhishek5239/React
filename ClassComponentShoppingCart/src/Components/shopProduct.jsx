import { Component } from "react";
import { connect } from "react-redux";
import speakerImage from '../assets/speaker.jpg';
import "../css/ShopProduct.css"
import NavigateWrapper from '../Wrapper/NavigateWrapper'
import { actionProductInfoList } from '../Actions/Action'
import { Outlet } from "react-router-dom";
class ShopProduct extends Component {
    constructor(props) {
        super(props);
    }

    productInfo = (val) => {
        console.log("selected product",val)
        this.props.productInfo(val);
        this.props.navigate(`/shopProduct/${val.productName}`);
    }
    goToCart=()=>{
        this.props.navigate('/ShopCart')
    }

    render() {
        return (
            <div className="divShopProduct">
                <div className="divFlexContainer">
                    {this.props.products.map((val) => {
                        let img = (val.productName).toLowerCase();
                        console.log(img)
                        return (
                            <div className="divProductItems" onClick={() => this.productInfo(val)}>
                                <div className="divImage">
                                    <img className="shopProductImage" src={new URL(`../assets/${img}.jpg`, import.meta.url).href} alt="no img" />
                                </div>
                                <div className="imgDescription">
                                    <h3>{val.productName}</h3>
                                    <h4>{val.amount}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="divButtonToCart">
                  {this.props.totalProductSelected.length>0 ? <button onClick={()=>this.goToCart()} className="buttonGoToCart">{`Your selected Products : ${this.props.totalProductSelected.length}`}</button>:<div></div>}
                </div>

            </div>



        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.products,
        totalProductSelected:state.SelectedProducts
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        productInfo: (val) => dispatch(actionProductInfoList(val))
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(NavigateWrapper(ShopProduct))