import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Secret, { loader as secretLoader } from "./utils/Secret";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const StyledApp = styled.div`
  background-color: var(--color-brand-100);
  padding: 20px;
`;

const router = createBrowserRouter([
  { path: "/", index: true, element: <Navigate replace to="dashboard" /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/bookings", element: <Bookings /> },
  { path: "/cabins", element: <Cabins /> },
  { path: "/users", element: <Users /> },
  { path: "/settings", element: <Settings /> },
  { path: "/account", element: <Account /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
  {
    path: "/seekaret",
    element: <Secret />,
    loader: secretLoader,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
