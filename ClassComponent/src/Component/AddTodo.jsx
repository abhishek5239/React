import React from 'react'
import { connect } from 'react-redux';
import {AddItem,DeleteItem} from '../Actions/TodoActions' 
class AddTodo extends React.Component
{


    constructor(props)
    {
        console.log("hrri");
        super(props)
        this.state={
            input:""
        }
        this.setInput=this.setInput.bind(this)
        this.submitForm=this.submitForm.bind(this)

    }
    setInput(val)
    {
        this.setState({input:val})
    }
    submitForm(e)
    { 
e.preventDefault()
this.props.addTodo(this.state.input)
this.setState({input:''})

    }
    deleteTodo(value){
        this.props.deleteTodo(value)
    }

    render()
    
    {
        console.log(this.props);
       
        return (
            <div>
                <h3>My TODO LIST</h3>
                <h3>one more text added for {this.props.name}</h3>
     <form action="" onSubmit={this.submitForm}>
        <input placeholder='enter todo' value={this.state.input} onChange={(e)=>this.setInput(e.target.value)} type="text" />
        <button   type="submit">Submit</button>
        
        </form>
        {
            this.props.todo.map((val)=>(
                <div data-testid="rederList" >
                    <h4>{val}</h4>
                    <button  onClick={this.deleteTodo.bind(this,val)}>delete</button>
                </div>
            ))
        }
        
            </div>
       

        
        )
     
    }
}
// export default AddTodo


const mapStateToProps=(state)=>{
   console.log(state);
    return {todo:state.todoReducer.todos,
        
    }
}
    

const mapDispatchToProps=(dispatch)=>({
    addTodo: (item)=>(dispatch(AddItem(item))),
    deleteTodo:(item)=>(dispatch(DeleteItem(item)))
    
})

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)