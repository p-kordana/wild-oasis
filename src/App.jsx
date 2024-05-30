import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Secret, { loader as secretLoader } from "./utils/Secret";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

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
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button>Check in</Button>
              <Button>Check out</Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
          <RouterProvider router={router} />
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
