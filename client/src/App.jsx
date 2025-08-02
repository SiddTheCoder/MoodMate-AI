import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCurrentUser } from "./feature/user/userThunks";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import LoaderModal from "./components/LoaderModal";
import GoogleCallback from "./pages/Oauth/GoogleCallback";
import PageNotFound from "./pages/PageNotFound";
import PageBacker from "./components/PageBacker";
import Signup from "./pages/SignupPage"; 
 
import MoodLogPage from "./pages/MoodLogPage";
import Lander from "./pages/Lander";
import PrivateRoute from "./routes/PrivateRoute";
import MainLayout from "./layout/MainLayout";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DoctorDashboard from "./pages/DoctorDashboard";
import SettingLayout from "./pages/Setting/SettingLayout";
import BecomeDoctor from "./pages/Doctor/BecomeDoctor";
import ChatPageLayout from "./pages/Chat/ChatPageLayout";
import Appointment from "./pages/Appointment/Appointment";
import Community from "./pages/Community/Community";
import ChatWithDoctor from "./pages/Chat/ChatWithDoctor";

function App() {
  const dispatch = useDispatch();
  const { isUserChecked } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!isUserChecked) return <LoaderModal />;

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          // Base styles
          style: {
            borderRadius: "10px",
            background: "#ffffff",
            color: "#1e3a8a", // Tailwind's blue-900
            padding: "12px 16px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            fontWeight: 500,
          },
          // Custom styles per type
          success: {
            iconTheme: {
              primary: "#3b82f6", // blue-500
              secondary: "#ffffff",
            },
            style: {
              color: "#1e3a8a",
              background: "#e0f2fe", // blue-100
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // red-500
              secondary: "#ffffff",
            },
            style: {
              color: "#7f1d1d",
              background: "#fee2e2", // red-100
            },
          },
        }}
        containerStyle={{
          top: "3rem", // tailwind top-12
          zIndex: 9999,
        }}
      />
      <Router>
        <Routes>
          {/* Public Routes */}

          <Route path="/" element={<Lander />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />

          <Route path="/oauth/google/callback" element={<GoogleCallback />} />

          <Route path="/" element={<MainLayout />}>
            <Route
              path="chat"
              element={
                <PrivateRoute>
                  <ChatPageLayout />
                </PrivateRoute>
              }
            />
            <Route
              path="settings"
              element={
                <PrivateRoute>
                  <SettingLayout />
                </PrivateRoute>
              }
            />
            <Route
              path="chat-with-doctor"
              element={
                <PrivateRoute>
                  <ChatWithDoctor />
                </PrivateRoute>
              }
            />
            <Route
              path="community"
              element={
                <PrivateRoute>
                  <Community />
                </PrivateRoute>
              }
            />
            <Route
              path="appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />
            <Route
              path="mood-graph"
              element={
                <PrivateRoute>
                  <MoodLogPage />
                </PrivateRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />

            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />

            <Route
              path="become-doctor"
              element={
                <PrivateRoute>
                  <BecomeDoctor />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
