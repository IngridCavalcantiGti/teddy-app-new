import { Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { LoginPage, ClientsPage, ClientsSelectedPage } from "@/pages"
import { AuthenticatedLayout } from "@/layouts"
import { WellcomePage } from "@/pages/WellcomePage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<AuthenticatedLayout />}>
        <Route path="/home" element={<WellcomePage />} />
        <Route
          path="clients"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen bg-white">
                  Carregando...
                </div>
              }
            >
              <ClientsPage />
            </Suspense>
          }
        />

        <Route path="selected-clients" element={<ClientsSelectedPage />} />
      </Route>
    </Routes>
  )
}

export { AppRoutes }
