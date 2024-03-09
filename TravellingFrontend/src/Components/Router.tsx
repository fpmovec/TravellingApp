import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../Pages/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
