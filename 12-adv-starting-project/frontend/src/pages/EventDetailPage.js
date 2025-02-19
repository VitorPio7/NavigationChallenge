import { useParams } from "react-router";
import EventItem from "../components/EventItem.js"
export default function EventDetailPage() {
    let myParans = useParams()
    return <EventItem event={myParans} />
}

export async function loader({ request, params }) {
    const id = params.eventsPage;
    const response = await fetch('http://localhost:8080/events/' + id)
    if (!response.ok) {
        throw Response()
    }
    return response
}
