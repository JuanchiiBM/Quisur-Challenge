import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function DefaultLayout({
    children,
    title
}: {
    children: React.ReactNode;
    title: string
}) {
    return (
        <div className="relative w-full flex flex-row h-screen">
            <Sidebar />
            <Navbar />
            <main className="container w-full h-full ml-60 flex flex-col">
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
