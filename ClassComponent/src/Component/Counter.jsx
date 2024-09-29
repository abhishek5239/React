import CounterTwo from './CounterTwo'
import React from 'react'
class Counter extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }
changeCounter()
{
    console.log("hi");
    this.setState((prevstate)=>({count:prevstate.count+1}))
}
componentDidUpdate(prevprops,prevstate)
{
    console.log("in counter  ",prevstate.count);
}

    render()
    {
        console.log("bye");
        return(
            <>
            <CounterTwo num={this.state.count}/>
            <button onClick={this.changeCounter.bind(this)}>+</button>
            </>
        )
    }
}
export default Counter