import wifi from "../img/wifi.png";
import garage from "../img/garage.png";
import fence from "../img/fence.png";
import bbq from "../img/barbecue.png";
import smarttv from "../img/smart-tv.png";
import pool from "../img/swimming-pool.png";

function Servicios() {
  return (
    <div className="container-xxl py-5" id="servicios">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Servicios brindados</h1>
          <p>
            Living-comedor amplio con cocina y asador integrados, puerta-ventana
            comunicada con un deck. Dormitorio amplio y luminoso con una cama
            matrimonial + cucheta de 2 camas + sofa-cama. Baño completo con
            vanitory, inodoro, bidet, ducha y termotanque eléctrico. Pileta con
            solarium. WIFI - Televisor - Chromecast. Dos cocheras techadas.
          </p>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={fence} alt="Icon" />
                </div>
                <h6>Parque amplio</h6>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={pool} alt="Icon" />
                </div>
                <h6>Pileta</h6>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={garage} alt="Icon" />
                </div>
                <h6>Cochera</h6>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={bbq} alt="Icon" />
                </div>
                <h6>Asador</h6>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={wifi} alt="Icon" />
                </div>
                <h6>Wi-Fi</h6>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div
              className="cat-item d-block bg-light text-center rounded p-3"
              href=""
            >
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src={smarttv} alt="Icon" />
                </div>
                <h6>SmartTV</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
