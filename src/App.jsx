import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Info from "./Pages/Info";
import Main from "./Pages/Main";
import Details from "./Pages/Details";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Info />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
