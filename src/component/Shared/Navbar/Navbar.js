import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            HR-Doctor
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to="/" class="nav-link ms-5">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/appointment" class="nav-link ms-5">
                  Appointment
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/dashboard/appointment" class="nav-link ms-5">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-5 text-white" href="#">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
              <a class="nav-link ms-5 text-white" href="#">
                  Contact Us
              </a>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link ms-5 text-white btn btn-primary">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
