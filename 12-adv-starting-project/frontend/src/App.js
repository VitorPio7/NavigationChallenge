import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from "./pages/HomePage";
import Root from './pages/Root'
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage'
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventsRootLayout';
let router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    { index: true, element: <HomePage /> },
    {
      path: 'events',
      element: <EventsRootLayout />,
      children: [{ index: true, element: <EventsPage /> },
      { path: ":eventsPage", element: <EventDetailPage /> },
      { path: "new", element: <NewEventPage /> },
      { path: ":eventsPage/edit", element: <EditEventPage /> }
      ],
    }
  ]
}])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
