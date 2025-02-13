import { Container } from "@mui/material";
import Header from "./components/header";
import TemplatesTest from "./components/templates";

export default function App() {

  return (
    <Container maxWidth="lg">
      <Header />
      <TemplatesTest/>
    </Container>
  );
}

