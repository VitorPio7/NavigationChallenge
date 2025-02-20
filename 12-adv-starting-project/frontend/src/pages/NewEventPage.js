import { redirect } from "react-router";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
    return <EventForm />
}


export async function action({ request, params }) {
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }
    let response = fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    });
    if (!response.ok) {
        throw Response(JSON.stringify({ message: "It's not possible to catch the data.", }), {
            status: 500
        })
    }
    return redirect('/events')
}