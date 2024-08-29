import Container from "react-bootstrap/Container";
import BookList from "./../src/components/BookList";
function App() {
  return (
    <Container className="py-3 my-3">
      <h1 className="text-center mb-3 py-4">My Books</h1>
      <BookList />
    </Container>
  );
}

export default App;
