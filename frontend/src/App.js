import Home from "./pages/Home/Home";
import Prediction from "./pages/Prediction/Prediction";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
            <Route index element={<Home />} />
            <Route path = "predict" element={<Prediction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
