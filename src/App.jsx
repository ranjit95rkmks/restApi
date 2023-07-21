import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ByCategoryPage from "./page/ByCategoryPage";
//import DetailsPage from "./page/DetailsPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/byCategory/:id" element={<ByCategoryPage />} />
          {/* {// <Route path="/details/:id" element={<DetailsPage />} />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
