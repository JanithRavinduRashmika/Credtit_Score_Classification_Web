import Article01 from "./components/Articles/Article01/Article01";
import ArticlePage from "./pages/Article/ArticlePage";
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
            <Route path = "article" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
