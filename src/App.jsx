import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import PageNotFound from "./Pages/PageNotFound";
import './App.css'
import FirstPage from "./Pages/FirstPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/join" element={<Signup />} />
        <Route path="/" element={<FirstPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
