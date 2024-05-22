import champ3 from "../img/champ3.jpeg";
import champ4 from "../img/champ4.jpeg";
import champ5 from "../img/champ5.jpeg";
import champ6 from "../img/champ6.jpeg";
import champ7 from "../img/champ7.jpeg";
import champ8 from "../img/champ8.jpeg";
import champ9 from "../img/champ9.jpeg";

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../css/style.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/owl.css";

function Header() {
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            El lugar <span className="text-primary">Ideal</span> en las Sierras
            de Córdoba para tus vacaciones!
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Disfrutá tus vacaciones en un espacio distendido. ¡Desconectate!
          </p>
          <a
            href="#reserva"
            className="btn btn-primary py-3 px-5 me-3 animated fadeIn"
          >
            Contactanos
          </a>
        </div>
        <div className="col-md-6 animated fadeIn">
          <OwlCarousel
            items={1}
            className="header-carousel"
            autoplay={true}
            loop
            nav
            margin={8}
          >
            <div>
              <img className="img" src={champ3} alt="Foto" />
            </div>
            <div>
              <img className="img" src={champ4} alt="Foto" />
            </div>
            <div>
              <img className="img" src={champ9} alt="Foto" />
            </div>
            <div>
              <img className="img" src={champ7} alt="Foto" />
            </div>
            <div>
              <img className="img" src={champ5} alt="Foto" />
            </div>
            <div>
              <img className="img" src={champ6} alt="Foto" />
            </div>
            <div>
              <img className="img" src={champ8} alt="Foto" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Header;
