import EventForm from "../components/EventForm.js";
import { useRouteLoaderData } from "react-router";
export default function EditEventPage() {
    let data = useRouteLoaderData('event-detail');
    return <EventForm event={data.event} />
}