import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import NotFound from './Pages/NotFound';
// import Child1 from './Child1';

const Login = lazy(() => import('./Pages/Login'));
const Register = lazy(() => import('./Pages/Register'));
const Home = lazy(() => import('./Pages/Home'));

interface Props {}

const App = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Register />
            </Suspense>
          }
        />
      </Route>
      <Route path="/home" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
