import "./App.css";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LaoDong } from "./pages/LaoDong";
import { Layout } from "./layouts/Layout";
import { XaHoi } from "./pages/XaHoi";
import { BanThan } from "./pages/BanThan";
import AutoScrollToTop from "./components/AutoScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <AutoScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tha-hoa-lao-dong" element={<LaoDong />} />
            <Route path="/tha-hoa-xa-hoi" element={<XaHoi />} />
            <Route path="/tha-hoa-ban-than" element={<BanThan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
