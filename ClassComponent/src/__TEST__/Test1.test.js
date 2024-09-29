import {screen, render,fireEvent} from '@testing-library/react'
import AddTodo from '../Component/AddTodo'
import '@testing-library/jest-dom';  //! we have to use this to Adds custom matchers for more readable assertions.
import { Provider } from 'react-redux';
import TodoStore from '../Store/TodoStore'


const WrapFun=({children})=>{
    return(<Provider store={TodoStore}>
        {   children
        }
    </Provider>)
}


test("search by name", ()=>{
   
    render(<WrapFun>
            <AddTodo name="abhishek"/>
        </WrapFun>)
        // console.log("screen################", screen);
        // console.log("expect ##############",expect);


    const name=screen.getByText("My TODO LIST")
    expect(name).toBeInTheDocument() //! this is coming from the jest

    // const byRole=screen.getByRole("heading")
    // expect(byRole).toBeInTheDocument()  //! This will give error as we have more than one heading


     const byRole=screen.getByRole("heading",{name:/one more text added for abhishek/i}) 
    expect(byRole).toBeInTheDocument()  //! Here we have provided the name as a property and we have also used the regx

    const arrayOfRole=screen.getAllByRole("heading")
    expect(arrayOfRole.length).toBe(3) // ! if it matches then it will pass
})


// !2 make use of describe

describe('by using the fire event', ()=>{

    test("test clicking and input functionality", ()=>{

        render(<WrapFun>
            <AddTodo name="abhishek"/>
        </WrapFun>)

        const btn=screen.getByRole("button",{name:"Submit"})
        expect(btn).not.toBeDisabled() //! here if you have disable the button then it pass but we have used not so it will fail

        fireEvent.click(btn) //! when we click the button

        
        // ! this only check when we click the button the value should get clear
        // ? you can check this using manully addidg value
        const input=screen.getByPlaceholderText("enter todo")
        expect(input.value).toBe("") 
    })

    test("Check whether text is getting clear after clicking on submit", ()=>{

        render(<WrapFun>
            <AddTodo name="abhishek"/>
        </WrapFun>)

      const btn=screen.getByRole("button",{name:"Submit"})
      const input=screen.getByPlaceholderText("enter todo")
      //! here we are automating and inputing the value
      fireEvent.change(input,{target:{value:"testing todo"}})
      fireEvent.click(btn)
    //   ! and when we click the value should get disappear
      expect(input.value).toBe("")
    })


})


describe("whether are todo are getting listed properly or not",()=>{
    
    test("list is getting render properly",()=>{
        render(<WrapFun>
            <AddTodo name="abhishek"/>
        </WrapFun>)
        console.log("#@#@");
        screen.debug()

        const input=screen.getByPlaceholderText("enter todo")
        const btn=screen.getByRole("button",{name:/submit/i})
        fireEvent.change(input,{target:{value:"do this last task"}})
        fireEvent.click(btn)
        // ! here we are taking the value and then checking whetehr it has been added to the
        // ! array or our div element by test-id. and then we are checking the length.
        // ?data-testid="rederList"
        const todo=screen.getAllByTestId("rederList")
        console.log("#############",todo.textContent);
        expect(todo.length).toBe(4)



    })
})
