import { BrowserRouter } from "react-router-dom";

import { Alert } from "@/components";
import { AppRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Alert />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
