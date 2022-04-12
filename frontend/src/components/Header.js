
import "./Header.css";

import vacation from "../images/koliba1.jpg";
import vessel from "../images/brod1.jpg";
import fishing from "../images/avantura1.jpg";
import business from "../images/biznis1.png";


const Header = () => {
    return<>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
            <div className="carousel-item active">
                        <img className="d-block w-100" src={vacation} alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Vikendice</h3>
                            <p>Brzo i lako rezervišite boravak u vikendicama</p>
                        </div>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={vessel} alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                            <h3>Brodovi i čamci</h3>
                            <p>Na dva klika od palube</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={fishing} alt="Third slide"/>
                    <div class="carousel-caption d-none d-md-block">
                            <h3>Avanture i časovi pecanja</h3>
                            <p>Najbolji instruktori u regionu. Avanture od kojih ostajete bez daha!</p>
                        </div>
                </div>
                
                <div className="carousel-item">
                        <img className="d-block w-100" src={business} alt="Forth slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Biznis</h3>
                            <p>Registracija za vlasnike vikendica, plovila i avantura</p>
                        </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
}

export default Header;