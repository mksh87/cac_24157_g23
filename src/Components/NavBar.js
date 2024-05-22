import React, { useState, useEffect } from "react";
import logo from "../img/logo4.png";
import "../lib/animate/animate.min.css";
import "bootstrap";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Función que maneja el evento de scroll
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agregar el evento de scroll al cargar el componente
    window.addEventListener("scroll", handleScroll);

    // Remover el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El segundo argumento es un array vacío para que el efecto solo se ejecute una vez

  // Aplicar la clase CSS condicionalmente al componente de navegación
  const navbarClasses = `container-fluid nav-bar bg-transparent ${
    isScrolled ? "sticky-top" : ""
  }`;

  return (
    <div className={navbarClasses}>
      <nav className="navbar navbar-expand-lg navbar-light py-0 px-4 menubar">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <img
            className="img-fluid"
            src={logo}
            alt="Icon"
            style={{ height: "75%" }}
          />
          {/* <h1 className="m-0 text-primary">Champ Elvin</h1> */}
        </a>
        <button
          type="button"
          className="navbar-toggler btn btn-primary"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link active">
              Inicio
            </a>
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Desplegable
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="property-list.html" className="dropdown-item">
                  Item 1
                </a>
                <a href="property-type.html" className="dropdown-item">
                  Item 2
                </a>
                <a href="property-agent.html" className="dropdown-item">
                  Item 3
                </a>
              </div>
            </div> */}
            <a href="#servicios" className="nav-item nav-link">
              Servicios
            </a>
            <a href="#ubicacion" className="nav-item nav-link">
              Ubicación
            </a>
          </div>
          <a href="#reserva" className="btn btn-primary px-3 d-none d-lg-flex">
            Reserva
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
