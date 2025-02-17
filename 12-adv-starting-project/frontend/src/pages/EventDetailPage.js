import { useParams } from "react-router"
export default function EventDetailPage() {
    let myParans = useParams()
    return <h1>{myParans.eventsPage}</h1>
}
