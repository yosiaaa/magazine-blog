import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./page/Home";
import Magazine from "./page/Magazine";
import MagazinePost from "./page/MagazinePost";
import Authors from "./page/Authors";
import Podcast from "./page/Podcast";
import PodcastPost from "./page/PodcastPost";
import ScrollToTop from "./components/ScrollToTop";
import AuthorsPost from "./page/AuthorsPost";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/magazine/:id" element={<MagazinePost />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:id" element={<AuthorsPost />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/podcast/:id" element={<PodcastPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
