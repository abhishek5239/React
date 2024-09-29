import React from 'react'
// ! 1. Here define this class and write one boolean haserror in the state. 
// ! 2. Now define a static method and when it is trigger it will return and change the boolean
// ! 3. if the boolean is true show the h2 tag or show the childs means other components.
class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error)
    {
        return {
            hasError:true
        }
    }

    render()
    {
        return(
            <>
            {
                this.state.hasError?<h2>Error dected</h2>:this.props.children
            }
            
            </>
        )
    }

    
}

export default ErrorBoundary