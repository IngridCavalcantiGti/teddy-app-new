
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";

export default function AuthenticatedLayout() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header onToggleSidebar={handleToggleSidebar} />
             <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
            <main className="px-4 py-6">
                <Outlet />
            </main>
        </div>
    );
}
