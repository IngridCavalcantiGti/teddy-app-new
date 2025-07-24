
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage'
// import { lazy, Suspense } from "react";


import './App.css'


// const ClientsPage = lazy(() => import("clients/ClientsPage"));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route
          path="/clients"
          element={
            <Suspense fallback={<div className="flex justify-center items-center h-screen bg-gray-50 text-black">
              Carregando...
            </div>}>
              <ClientsPage />
            </Suspense>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
