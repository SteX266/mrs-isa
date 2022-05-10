import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";

import {Link} from 'react-router-dom'

const NavigationBar = () =>{

return <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/"><h2 class="text-warning">Fish'n'Ships</h2></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mob-navbar" aria-label="Toggle" >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mob-navbar">
                <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Vacations</a>
                    </li>

                    <li class="nav-item">

                       <Link to="/clientProfile"> <a class="nav-link" href="/clientProfile">Vessels</a> </Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Adventures</a>
                    </li>
                </ul>
                    <a href="/login"  class="btn btn-warning" >Login</a>
                    <a href="/registration"  style={{"marginLeft":"5px"}}class="btn btn-warning" >Sing up</a>
                
            </div>
        </div>
    </nav>
    </>
}

export default NavigationBar