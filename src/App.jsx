import "./Index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "./layout/MainLayOut";
import HomePage from "./pages/HomePage";
import ReservePage from "./pages/ReservePage"
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage"
import GalleryPage from "./pages/GalleryPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<HomePage />} />
      <Route path= "/reserve" element={<ReservePage />} />
      <Route path= "/menu" element={<MenuPage />} />
      <Route path= "/gallery" element={<GalleryPage />} />
      <Route path= "/about" element={<AboutPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

