import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./Layout/Layout.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '300px',
              fontFamily: 'Montserrat',
              fontSize: '32px',
              fontWeight: '600',
              color: 'grey',
            }}
          >
            Please wait...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
