import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../Pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
