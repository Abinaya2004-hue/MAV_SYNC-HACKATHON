import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TrainingOverview from "./pages/TrainingOverview/TrainingOverview";
import Login from "./pages/Auth/Login";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/training-overview"
          element={
            <ProtectedRoute>
              <TrainingOverview />
            </ProtectedRoute>
          }
        />
        {/* fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/training-overview" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
