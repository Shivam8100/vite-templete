import { Route, Routes } from "react-router-dom";
import Login from "@pages/login";
import AppLayout from "@molecules/Layout";
import { useSelector } from "react-redux";
import "./global.css";

export const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.idToken) ? true : false;

  return (
    <>
      {isLoggedIn ? (
        <AppLayout>
          <Routes>
            <Route exact path="/" element={<h1>Hello</h1>}></Route>
          </Routes>
        </AppLayout>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
