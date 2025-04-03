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
            <main className="container w-full h-full flex flex-col">
                <Navbar />
                <section className="w-full p-4">
                    <h1 className="text-2xl mb-4">{title}</h1>
                    {children}
                </section>
            </main>
        </div>
    );
}
