import port from "../../help"


const handleBookRideRegistration = async (sendDestination, sendSource, vehicleID) => {

    console.log('sendDestination', sendDestination, "sendSource", sendSource, "vehicleID", "vehicleID")
    try {
        const res = await fetch(`${port}/api/v1/users/booking`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                vehicleID, sendSource, sendDestination
            })
        })
        if (res.ok) {
            const data = await res.json()

            console.log(data)
        }
    }
    catch (error) {
        console.log("Something went wrong", error)
    }
}

export {
    handleBookRideRegistration
}