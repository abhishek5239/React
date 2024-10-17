import { useNavigate } from "react-router-dom"

const NavigateWrapper=(Component)=>{

    return (props) =>{
        const navigate=useNavigate();
        return (<Component {...props} navigate={navigate} />)
    }
}
export default NavigateWrapper;