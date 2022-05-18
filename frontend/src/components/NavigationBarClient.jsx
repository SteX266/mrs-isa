import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";

import { Link } from "react-router-dom";

const NavigationBarClient = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/client">
            <h2 class="text-warning">Fish'n'Ships</h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mob-navbar"
            aria-label="Toggle"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mob-navbar">
            <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/client">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Link to="/client/vacations">
                  {" "}
                  <a class="nav-link" href="/vacations">
                    Vacations
                  </a>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/client/vessels">
                  {" "}
                  <a class="nav-link" href="/clientProfile">
                    Vessels
                  </a>{" "}
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/client/adventures">
                  {" "}
                  <a class="nav-link" href="/adventures">
                    Adventures
                  </a>
                </Link>
              </li>


              <li class="nav-item">
                <Link to="/client/reservations">
                  {" "}
                  <a class="nav-link" >
                    Reservations
                  </a>
                </Link>
              </li>


              <li class="nav-item">
                <Link to="/client/clientProfile">
                  {" "}
                  <a class="nav-link" >
                    Profile
                  </a>
                </Link>
              </li>
            </ul>
            <Link to="/">
              <a class="btn btn-warning">Logout</a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBarClient;
