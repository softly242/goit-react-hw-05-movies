import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
/* import { ToastContainer } from 'react-toastify'; */
/* import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
/* import NotFound from '../pages/NotFound'; */
/* import Cast from './Cast/Cast'; */
/* import Reviews from './Reviews/Reviews';  */
import { lazy } from "react";
import { SharedLayout } from './SharedLayout/SharedLayout';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));



export default function App() {
  return (
    <Routes>

      <Route path="/" element={<SharedLayout />}>

        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Route>

    </Routes>
  );
}
