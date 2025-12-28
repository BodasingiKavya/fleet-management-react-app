import { useState } from "react";
function SideBar(){
    const [form,setForm] =  useState({
        registerNo : "",
        category:"Car",
        driverName:"",
        available:true,
    });

    const handleSubmit = ()=>{
        if (!form.registerNo || !form.driverName) return alert('Fields Required');

        addFleet({...form,id:Date.now()});
        setForm({registerNo:"",driverName:"",category:"Car",available:true});
    }

    return (

        <>
            <h3> Add Fleet</h3>
            <input placeholder="Veichle Register No " value={form.registerNo} onChange={(e)=>setForm({...form,registerNo:e.target.value})}/>
            <input placeholder="Driver Name" value={form.registerNo} onChange={(e)=>setForm({...form,driverName:e.target.value})}/>
            <select onChange={(e)=>setForm({...form,category:e.target.value})}>
                <option>Car</option>
                <option>Auto</option>
                <option>Bike</option>
                <option>Bus</option>
            </select>
            <button onClick={handleSubmit}>Add Fleet</button>
        </>
    )


}
export default SideBar;