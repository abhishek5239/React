import React from 'react'
class CounterTwo extends React.Component
{
    constructor(props){
super(props)
        this.state={}
    }
    componentDidUpdate(prevprops,prevstate)
    {
        console.log("in counter2  ",prevprops.num);
    }
    render()
    {
        return (
            <>
            <h3>{this.props.num}</h3>
            </>
        )

    }

}
export default CounterTwo