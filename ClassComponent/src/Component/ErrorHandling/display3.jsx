import React from 'react'

class DisplayThree extends React.Component
{

    constructor(props)
    {
        super(props)
        this.state={}
    }
    

    render()
    {
        if(this.props.name==="ashu")
            {
             throw new Error("kuch toh gadhbadh hai");   
            }
        return (
            <>
            <h2>{this.props.name}</h2>
            </>
        )
    }
}

export default DisplayThree