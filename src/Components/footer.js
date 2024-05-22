import logo2 from "../img/logo2.png";
import fb from "../img/fb-logo.png";
import ig from "../img/ig-logo.png";

function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-1 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-4">
          <div className="row g-5">
            <div className="col-lg-4 col-md-4 col-4" style={{ margin: "0" }}>
              <a
                href="index.html"
                className="navbar-brand d-flex align-items-center text-center"
                style={{ justifyContent: "center" }}
              >
                <img
                  className="img-fluid"
                  src={logo2}
                  alt="Icon"
                  style={{ height: "100px" }}
                />
                {/* <h1 className="m-0 text-primary">Champ Elvin</h1> */}
              </a>
            </div>
            <div className="col-lg-4 col-md-4 col-4" style={{ margin: "0" }}>
              <h5 className="text-white mb-4">Seguinos</h5>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/champelvin/"
                  target="_blank"
                >
                  <img src={ig} className="myicons"></img>
                </a>
                {/* <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/champelvin/"
                  target="_blank"
                >
                  <img src={fb} className="myicons"></img>
                </a> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-4" style={{ margin: "0" }}>
              <h5 className="text-white mb-4">Conocé Icho Cruz</h5>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.instagram.com/ichocruzok/"
                  target="_blank"
                >
                  <img src={ig} className="myicons"></img>
                </a>
                <a
                  className="btn btn-outline-light btn-social"
                  href="https://www.cordobaturismo.gov.ar/localidad/villa-icho-cruz/"
                  target="_blank"
                >
                  <img src={fb} className="myicons"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        ▲
      </a>
    </>
  );
}

export default Footer;
