import { useState,useRef,useEffect,useContext } from "react";
 import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const emailRef =useRef();
    const navigate = useNavigate();
    const {setIsAuth} = useContext(AuthContext);

    const handleLogin = ()=>{
        if ( email === 'admin@gmail.com' && password === "admin@1234"){
            alert("Login success");
            setIsAuth(true);
            navigate('/admin');
        }
        else{
            alert("Wrong email or password");

        }
    }
    return (
        <>
            <input type="email" placeholder="Enter your Email" ref={emailRef} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>

        </>
    )
}

export default Login;