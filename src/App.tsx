import "./App.css";
import { Hero } from "./components/Hero";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  return (
    <>
      <div>
        <Header />

        {/* Conteúdo principal da aplicação */}
        <Hero />

        <Footer />
      </div>
    </>
  );
}

export default App;
