import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
function About()
{
    return (
        <>
        
        <Link to=""> About Team</Link>
        <Link to="Organization"> About Organization </ Link>
        <Outlet/>
        </>
        
    );
}

export default About