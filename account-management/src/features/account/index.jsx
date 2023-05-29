import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../components/notFound";
import MainPage from "./pages/main";

Account.propTypes = {};

function Account(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Account;
