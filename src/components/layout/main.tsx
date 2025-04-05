import Navbar from "./navbar";
import Sidebar from "./sidebar";
import useCollapsed from "@/utils/helpers/useCollapsed";
import { SpinnerComponent } from "../spinners";
import { useGlobalContext } from "@/utils/context/useGlobalContext";

const DefaultLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
    const { collapsed, setCollapsed } = useCollapsed();
    const {spinner} = useGlobalContext()

    return (
        <div className="relative w-full flex flex-row h-screen">
            <Sidebar collapsed={collapsed} />
            <Navbar setCollapsed={setCollapsed} collapsed={collapsed} />
            {spinner && <SpinnerComponent/>}
            <main className={`container w-full h-full sm:ml-60 ml-0 flex flex-col`}>
                <section className="w-full mt-20 p-4">
                    <h1 className="text-2xl mb-4">{title}</h1>
                    <section className="p-4">
                        {children}
                    </section>
                </section>
            </main>
        </div>
    );
}

export default DefaultLayout