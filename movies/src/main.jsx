import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'

const App = () => {
  return (
    <BrowserRouter>
    <SiteHeader />
    <Routes>
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </BrowserRouter>

  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
