import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../AuthContext";
function NavBar(){
    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () =>{ setIsAuth(false); navigate('/login')}
    return (

        <>
            <div style={{padding:"20px",display:"flex",justifyContent:"space-between", borderBottom:"1px solid grey"}}>
                <span style={{marginRight:"20px"}}>
                    Fleet Management
                </span>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}
export default NavBar;