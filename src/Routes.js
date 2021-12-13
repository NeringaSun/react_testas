import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Register, Login, Home, Add, NotFound } from './pages';
import PrivateRoute from './components/PrivateRoute';
import { Loading } from './components';

const LazyHome = lazy(() => import('./pages/Home/Home'));

const PageRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route
            component={LazyHome}
            path='/'
            element={<PrivateRoute>{<Home />}</PrivateRoute>}
          />
          <Route
            component={LazyHome}
            path='/add'
            element={<PrivateRoute>{<Add />}</PrivateRoute>}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PageRoutes;
