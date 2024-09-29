import React from 'react'
import DisplayTwo from './display2'
import DisplayThree from './display3'
import ErrorBoundary from './ErrorBoundaries'

class Display extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={}
    }

    render()
    {
        // ! Here we have to wrap all the component inside the errorboundary and they are it's children.
        
        return (
            <>
           <ErrorBoundary>
           <DisplayTwo name="abhi"/>
           </ErrorBoundary>
            
   <ErrorBoundary>
   <DisplayThree name="ashu"/>
           </ErrorBoundary>
          

           
          
            </>
        )
    }


}

export default Display