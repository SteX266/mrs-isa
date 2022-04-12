import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";

import pikachu from "../images/pikachu.jpg"


import React, {useEffect, useState} from 'react';


const NavigationBar = () =>{

return <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><h2 class="text-warning">LOGO</h2></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mob-navbar" aria-label="Toggle">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mob-navbar">
                <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Početna</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Vikendice</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Plovila</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Avanture</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Email" />
                    <input class="form-control me-2" type="password" placeholder="Password" />
                    <button class="btn btn-warning" type="submit">Prijava</button>
                    <button style={{"marginLeft":"5px"}}class="btn btn-warning" type="submit">Registracija</button>
                </form>
            </div>
        </div>
    </nav>
    </>
}

export default NavigationBar