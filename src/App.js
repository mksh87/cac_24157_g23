import "./App.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/animate/animate.min.css";

import "./css/style.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/HeaderComp";
import Servicios from "./Components/ServiciosComp";
import Ubicacion from "./Components/Ubicacion";
import Footer from "./Components/footer";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <NavBar />
      <Header />
      <Servicios />
      <Ubicacion />
      <ContactForm />
      <Footer />

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      <script src="./lib/wow/wow.min.js"></script>
      <script src="./lib/easing/easing.min.js"></script>
      <script src="./lib/waypoints/waypoints.min.js"></script>
      <script src="./lib/owlcarousel/owl.carousel.min.js"></script>
    </div>
  );
}

export default App;
