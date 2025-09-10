import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MenuProvider } from "./contexts/MenuContext";
import "./assets/styles/global.css";

import AudioPlayer from "./components/AudioPlayer";
import PageNotFound from "./components/PageNotFound";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Home = lazy(() => import("./pages/Home"));
const Destination = lazy(() => import("./pages/Destination"));
const Crew = lazy(() => import("./pages/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

export default function App() {
  return (
    <>
      <MenuProvider>
        <AudioPlayer />
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="destination" element={<Destination />}></Route>
              <Route path="crew" element={<Crew />}></Route>
              <Route path="technology" element={<Technology />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MenuProvider>
    </>
  );
}
