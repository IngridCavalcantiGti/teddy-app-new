import { Header, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const AuthenticatedLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <main className="px-15 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export { AuthenticatedLayout };
