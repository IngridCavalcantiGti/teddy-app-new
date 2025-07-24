import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ClientsPage from "./pages/ClientsPage/ClientsPage";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import { Suspense } from "react";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <BrowserRouter>
     <Alert />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        <Route path="/clientes" element={<AuthenticatedLayout />}>
          <Route index element={
            <Suspense fallback={<div className="flex justify-center items-center h-screen bg-white">Carregando...</div>}>
              <ClientsPage />
            </Suspense>
          } />
        </Route>
          {/* <Route path="/clientes-selecionados" element={<LoginPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
