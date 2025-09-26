import "./App.css";
import { ConfigProvider, notification } from "antd";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/auth/Login";
import ProtectedRoutes from "./navigation/ProtectedRoutes";
import Home from "./screens/Home";

function App() {
  const [_, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <ConfigProvider>
        <HashRouter>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />}></Route>
              {/* <Route path="/my-profile" element={<MyProfile />} /> */}
            </Route>
            <Route path="/signin" element={<Login />} />
          </Routes>
        </HashRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
