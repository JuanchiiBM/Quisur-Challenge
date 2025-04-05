import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import CRUDProduct from "./pages/CRUDProduct";
import ViewProducts from "./pages/viewProducts";
import { GlobalContext } from "./utils/context/useGlobalContext";
import { useState } from "react";
import { useTheme } from "@heroui/use-theme";

function App() {
    const [spinner, setSpinner] = useState<boolean>(false)
    const { theme, setTheme } = useTheme();

    return (
        <GlobalContext.Provider value={{ 
            spinner: spinner, 
            setSpinner: setSpinner, 
            setTheme: setTheme, 
            theme: theme 
        }}>
            <Routes>
                <Route element={<IndexPage />} path="/" />
                <Route element={<CRUDProduct />} path="/tabla" />
                <Route element={<ViewProducts />} path="/vista" />
            </Routes>
        </GlobalContext.Provider>
    );
}

export default App;
