import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Secret, { loader as secretLoader } from "./utils/Secret";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: red;
`;

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
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Input type="number" placeholder="Number of guests" />
        <RouterProvider router={router} />
      </StyledApp>
    </>
  );
}

export default App;
