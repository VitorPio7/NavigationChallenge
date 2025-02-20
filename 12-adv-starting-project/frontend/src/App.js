import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from "./pages/HomePage";
import Root from './pages/Root'
import EventDetailPage, { loader as eventDetail } from './pages/EventDetailPage';
import EventsPage, { loader, action as deleteEventAction } from './pages/EventsPage';
import NewEventPage, { action as newAction } from './pages/NewEventPage'
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventsRootLayout';
import ErrorPage from './pages/ErrorPage';

let router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <HomePage /> },
    {
      path: 'events',
      element: <EventsRootLayout />,
      children: [{
        index: true, element: <EventsPage />,
        loader: loader
      },
      {
        path: ':eventId',
        id: 'event-detail',
        loader: eventDetail,
        children: [{
          index: true,
          element: <EventDetailPage />,
          action: deleteEventAction
        },
        { path: "edit", element: <EditEventPage /> }
        ]

      },
      { path: "new", element: <NewEventPage />, action: newAction },

      ],
    }

  ]
}])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
