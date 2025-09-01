import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardLayout from './components/Layouts/DashboardLayout'; 
import { Dashboard } from './pages/Dashboard';
import { Lessons } from './pages/Lessons';
import { LessonDetail } from './pages/LessonDetail';
import { Progress } from './pages/Progress';
import { Collaboration } from './pages/Collaboration';
import { AdminDashboard } from './pages/AdminDashboard';
import { Profile } from './pages/Profile';
import Secure from './components/Secure'; // ✅ use Secure instead of ProtectedRoute
const AppRoutes = () => {
  const { user } = useUser();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Secure routes */}
      <Route
        path="/*"
        element={
          <Secure user={user}>
            <DashboardLayout />
          </Secure>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="lessons/:id" element={<LessonDetail />} />
        <Route path="progress" element={<Progress />} />
        <Route path="collaboration" element={<Collaboration />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <div className="text-center text-gray-500 text-xl">
              Page Not Found
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
      <AppRoutes />
      </Router>
    </UserProvider>
  );
};

export default App;
