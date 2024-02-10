import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarBrands, CarList, NotFound } from "./pages";
import Layout from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CarBrands />} />
          <Route path="cars" element={<CarList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
