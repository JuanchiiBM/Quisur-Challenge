import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import CRUDProduct from "./pages/CRUDProduct";
import ViewPage from "./pages/view";
import { GlobalContext } from "./utils/context/useGlobalContext";
import { useState } from "react";

function App() {
    const [spinner, setSpinner] = useState<boolean>(false)

    return (
        <GlobalContext.Provider value={{ spinner: spinner, setSpinner: setSpinner }}>
            <Routes>
                <Route element={<IndexPage />} path="/" />
                <Route element={<CRUDProduct />} path="/tabla" />
                <Route element={<ViewPage />} path="/vista" />
            </Routes>
        </GlobalContext.Provider>
    );
}

export default App;
