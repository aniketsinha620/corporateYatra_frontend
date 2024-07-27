import port from "../../../help"


const getVehicleDetail = async (vehicleID) => {
    try {

        const res = await fetch(`${port}/api/v1/users/bookedVehicle`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                vehicleID
            })
        })

        if (res) {
            const data = await res.json();
            const vehicleDetail = data.data;
            return vehicleDetail
        }
    } catch (error) {
        console.log(error);
    }
}

export { getVehicleDetail }