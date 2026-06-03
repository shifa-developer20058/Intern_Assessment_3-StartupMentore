import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import SubmitIdea from "./pages/SubmitIdea";
import Analysis from "./pages/Analysis";
import Tree from "./pages/Tree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/submit" element={<SubmitIdea />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/tree" element={<Tree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;