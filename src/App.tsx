import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import TablePage from "./pages/table";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<TablePage />} path="/tabla" />
    </Routes>
  );
}

export default App;
