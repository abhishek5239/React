import React from "react";
import  "../css/HomePage.css"
import NavigateWrapper from '../Wrapper/NavigateWrapper'
class Home extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    shoppingButton =()=>{
        this.props.navigate('/shopProduct')
    }
    addProduct=()=>{
        this.props.navigate('/addProduct')
    }

    render()
    {
        return(
            <div className="divbutton">
                <button onClick={this.shoppingButton}>Shopping</button>
                <button onClick={this.addProduct}>Add Product</button>
            </div>
        )
        
    }

}

export default NavigateWrapper(Home)