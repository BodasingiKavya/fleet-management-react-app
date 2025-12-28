import { useCallback, useState } from "react";
import SideBar from "../Components/SideBar";

function Admin(){
    const [fleets,setFleets] = useState([]);
    const addFleet = (newfleet)=>{
        setFleets((prev)=>[...prev,newfleet]);
    }

    const updatedDriver = useCallback((id,name)=>{
        setFleets((prev)=>(
            prev.map((f)=>f.id === id ? {...f,driver:name}:f)
        ));
    },[]);
    const toggleAvailable = useCallback((id)=>{
        setFleets((prev)=>{
            prev.map((f)=>{f.id===id ? {...f,available:f.available}:f});
        })
    },[]);

    const deleteFleet = useCallback((id)=>{
        if(confirm("Are you sure?")){setFleets((prev)=>prev.filter((f)=>f.id !== id));};
        
    },[]);

    return(
        <>
            <Navbar/>
            <h1>Admin Dashboard</h1>
            <div style={{}}>
                <SideBar addFleet={addFleet}></SideBar>
                <div style={{}}>
                    <FleetCard key={fleets.id} fleet={fleet} updatedDriver={updatedDriver} toggleAvailable={toggleAvailable} deleteFleet={deleteFleet}></FleetCard>
                </div>
            </div>

        </>
    )
}
export default Admin;