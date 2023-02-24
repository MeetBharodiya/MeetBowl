import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./page/Authenticate/Authenticate";
import Activate from "./page/Activate/Activate";
import Rooms from "./page/Rooms/Rooms";
import Room from "./page/Room/Room";
import GuestRoute from "./Utils/GuestRoute/GuestRoute";
import BindAuthUserRoute from "./Utils/BindAuthUserRoute/BindAuthUserRoute";
import SemiProtectedRoute from "./Utils/SemiProtectedRoute/SemiProtectedRoute";
import ProtectedRoute from "./Utils/ProtectedRoute/ProtectedRoute";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import Loader from "./components/shared/Loader/Loader";

function App() {
  const {loading} = useLoadingWithRefresh();
  return loading ? (
    <Loader message="Loading.. plz wait"/>
  ) : (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<BindAuthUserRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Route>

        <Route element={<GuestRoute />}>
          <Route path="/rooms" element={<Rooms />} />
        </Route>

        <Route element={<SemiProtectedRoute />}>
          <Route path="/activate" element={<Activate />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<Room />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
