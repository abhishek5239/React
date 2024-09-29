import { Component } from "react";
import { connect } from 'react-redux';
import {getData} from '../Actions/TodoActions'
class ApiGet extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            responseApi:[]
        }
    }
    // componentDidMount()
    // {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>{
    //         return res.json()
    //     }).then((response)=>{
    //        this.setState({responseApi:response})
    //     }).catch((e)=>{console.log("error dected ", e);})
    // }
      componentDidMount()
    {
        this.props.callData()
    }

    render(){ 
        return (
            <>

            {/* {
                this.state.responseApi.map((val)=>(
                    <div>
                        <h3>id:{val.id}</h3>
                        <h3>title:{val.title}</h3>
                    </div>
                ))
            } */}
             {
                this.props.getDate.map((val)=>(
                    <div>
                        <h3>id:{val.id}</h3>
                        <h3>title:{val.title}</h3>
                    </div>
                ))
            }
            
            </>
        )
    }
} 

const mapStateToProps=(state)=>({
getDate:state.todoReducer.fetchData
})
const mapDispatchToProps=(dispatch)=>(
    {
        callData:()=>dispatch(getData())
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(ApiGet) 