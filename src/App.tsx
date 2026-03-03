import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Login, Register } from "./components";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
