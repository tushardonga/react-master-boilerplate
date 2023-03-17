import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Unauthorized from "./components/Auth/Unauthorized";
import PersistLogin from "./components/Auth/PersistLogin";
import RequireAuth from "./components/Auth/RequireAuth";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";

// disabled dev tools using best package availabe at development time of any project
// encrypt all the password which we storing anywhere in project : using bcrypt pkg

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>

        {/* catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
