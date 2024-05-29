import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Secret, { loader as secretLoader } from "./utils/Secret";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: var(--color-brand-100);
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
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
        <RouterProvider router={router} />
      </StyledApp>
    </>
  );
}

export default App;
