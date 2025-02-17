import { Link } from "react-router"
import { useEffect, useState } from "react"
import EventsList from "../components/EventsList";
export default function EventsPage() {
    let [isLoading, setIsLoading] = useState(false);
    let [dummyData, setDummyData] = useState();

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true)
                let response = await fetch('http://localhost:8080/events');
                if (!response.ok) {
                    console.error("Error on fetch your data.");
                } else {
                    let resData = await response.json();
                    setDummyData(resData.events)
                }
                setIsLoading(false)

            } catch (error) {
                throw new Error("An error ocurred", error);
            }
        }
        getData()
    }, [])
    return <> <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
    </div>
        {!isLoading && dummyData && <EventsList events={dummyData} />}
    </>
}