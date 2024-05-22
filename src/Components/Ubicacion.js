import location from "../img/loc.png";
import phone from "../img/phone.png";
import gmail from "../img/gmail.png";

function Ubicacion() {
  return (
    <div className="container-xxl py-5" id="ubicacion">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Donde estamos</h1>
          <p>
            La localidad de Villa Icho Cruz se ubica a una hora de la ciudad de
            Córdoba. A su vez, la cabaña se encuentra a pocas cuadras del centro
            y a 50 metros del rio San Antonio, balneario Cuesta Blanca.
          </p>
        </div>
        <div className="row g-4">
          <div className="col wow fadeInUp" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.1398943685418!2d-64.57370702544077!3d-31.478307096746395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d68124b7a0fb1%3A0x7ad14d500a26af25!2sVilla%20Icho%20Cruz%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1703782535681!5m2!1ses-419!2sar"
              frameBorder="0"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-12">
            <div className="row gy-4">
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <img className="myicons" src={location} alt="Ícono"></img>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/AZjnFNgXe1fQ5ZN17"
                      target="_blank"
                    >
                      <span>Ibicuy 218, Villa Icho Cruz</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <img className="myicons" src={gmail} alt="Ícono"></img>
                    </div>
                    <a href="mailto:colomeyer2@gmail.com" target="_blank">
                      <span>colomeyer2@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="bg-light rounded p-3">
                  <div
                    className="d-flex align-items-center bg-white rounded p-3"
                    style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                  >
                    <div
                      className="icon me-3"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <img className="myicons" src={phone} alt="Ícono"></img>
                    </div>
                    <a href="https://wa.me/543516073558" target="_blank">
                      <span>+54 351 607 3558</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ubicacion;
