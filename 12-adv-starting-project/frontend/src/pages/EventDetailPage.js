import { useParams, useLoaderData } from "react-router";
import EventItem from "../components/EventItem.js"
export default function EventDetailPage() {

    let loadData = useLoaderData();
    return <EventItem event={loadData.event} />
}

export async function loader({ request, params }) {
    const id = params.eventsPage;
    const response = await fetch('http://localhost:8080/events/' + id)
    if (!response.ok) {
        throw Response(JSON.stringify({ message: "It's not possible to catch the data.", }), {
            status: 500
        })
    }
    return response
}
