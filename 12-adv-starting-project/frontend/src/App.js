import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from "./pages/HomePage";
import Root from './pages/Root'
import EventDetailPage, { loader as eventDetail, action as deleteEventAction } from './pages/EventDetailPage';
import EventsPage, { loader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage'
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventsRootLayout';
import ErrorPage from './pages/ErrorPage';
import { action as manipulateEventAction } from './pages/EventDetailPage';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter'
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
        { path: "edit", element: <EditEventPage />, action: manipulateEventAction }
        ]
      },
      { path: "new", element: <NewEventPage />, action: manipulateEventAction },
      ],
    },
    {
      path: 'newsletter',
      element: <NewsletterPage />,
      action: newsletterAction
    },
  ],
}])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
