import { redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem.js";
export default function EventDetailPage() {
    let loadData = useRouteLoaderData('event-detail');
    return <EventItem event={loadData.event} />
}

export async function loader({ request, params }) {
    console.log(params)
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id)
    if (!response.ok) {
        throw Response(JSON.stringify({ message: "It's not possible to catch the data.", }), {
            status: 500
        })
    }
    return response
}
export async function action({ params, request }) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method
    })
    if (!response.ok) {
        throw Response(JSON.stringify({ message: 'Could not delete event.' }), {
            status: 500
        })
    }
    redirect('/events')
}