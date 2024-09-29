import {useState} from 'react'
function Forms()
{
    
    
    const [formValue,funFormValue]=useState({username:"",lastname:""})
    console.log(formValue);
    const fun = (e) => {
    
        const { name, value } = e.target;
    //   ?in name we get the unsername and lastname and to that we can attach the value.
        funFormValue(prevValue => ({
            ...prevValue,
            [name]: value
            
        }));
    };
    // //?label and htmfor is used when you click on the label it highlight the box
    // ? onchange should only be written in this way.
    // ? value is very imp to take react the control of your code
    return(
        <>

        <form action="">
            <label htmlFor="user">name: 
                
            <input type="text" id='user' value={formValue.username} name='username' onChange={fun} />
            </label>
             <input type="text" value={formValue.lastname} name='lastname' onChange={fun} />


        </form>
       
        </>
    )
}
export default Forms