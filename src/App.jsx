import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Secret, { loader as secretLoader } from "./utils/Secret";

const router = createBrowserRouter([
  { path: "/", element: <>Howdy</> },
  {
    path: "/seekaret",
    element: <Secret />,
    loader: secretLoader,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
