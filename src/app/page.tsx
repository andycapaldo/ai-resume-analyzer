import Form from "./components/Form";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <Container>
      <Navbar />
        <Header />
        <Form />
        <Footer />
    </Container>
  );
}
