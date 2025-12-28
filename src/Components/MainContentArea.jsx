
function FleetCard({fleet,updatedDriver,toggleAvailable,deleteFleet}){
    const changeDriver = ()=>{
        const name = prompt("Enter Driver Name");
        if (name && name.trim())
            updatedDriver(fleet.id,name);
    }
    return (
        
        <>
            <div>
                <p>Vehicle Registration No:{fleet.registerNo} </p>
                <p>Category : {fleet.category}</p>
                <p>Driver : {fleet.driverName}</p>
                <p>Availablity : {fleet.available ? "Available" : "Not Available"}</p>
                <button onClick={changeDriver}>Update Driver</button>
                <button onClick={toggleAvailable(fleet.id)}>Toggle Status</button>
                <button onClick={deleteFleet(fleet.id)}>Delete</button>
            </div>
        </>
    )
}

export default FleetCard;