import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <header>
        <MyNav></MyNav>
      </header>
      <main>
        <Container>
          <Welcome></Welcome>
          <AllTheBooks></AllTheBooks>
        </Container>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
