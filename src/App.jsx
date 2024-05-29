import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Secret, { loader as secretLoader } from "./utils/Secret";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: red;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  width: 40px;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
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
