import Container from "react-bootstrap/Container";
import BookList from "./../src/components/BookList";
import FormsAdd from "./components/FormsAdd";
function App() {
  return (
    <Container className="py-3 my-3">
      <h1 className="text-center mb-3 py-4">My Books</h1>
      <FormsAdd />
      <BookList />
    </Container>
  );
}

export default App;
