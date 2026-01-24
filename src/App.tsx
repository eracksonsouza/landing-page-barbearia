import { Hero } from "./components/Hero";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Header />

        {/* Conteúdo principal da aplicação */}
        <Hero />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
