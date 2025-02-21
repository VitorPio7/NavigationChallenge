import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;
    return <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
    </Suspense >
}

export default EventsPage;
export async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
            status: 500,
        });
    } else {
        let resData = await response.json();
        return resData.events;
    }
}
export async function loader() {
    return {
        events: loadEvents(),
    };
}