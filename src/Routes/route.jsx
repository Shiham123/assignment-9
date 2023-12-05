import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import ErrorPage from '../pages/error';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import ProfilePage from '../pages/profile';
import Details from '../pages/details';
import PrivateRoute from './privateRoute';
import HospitalityPage from '../pages/hospitality';
import PatientReviewsPage from '../pages/patientReviews';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/hospitality',
        element: (
          <PrivateRoute>
            <HospitalityPage />
          </PrivateRoute>
        ),
      },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegistrationPage /> },
      {
        path: '/patientReviews',
        element: (
          <PrivateRoute>
            <PatientReviewsPage />
          </PrivateRoute>
        ),
      },
      { path: '/profile', element: <ProfilePage /> },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: () => fetch('/data.json'),
      },
    ],
  },
]);

export default routes;
