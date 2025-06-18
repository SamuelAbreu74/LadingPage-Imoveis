import { useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Carousel1(){
    useEffect(() => {
        const carouselElement = document.getElementById('carousel-1 ');
        if(carouselElement){
            const bootstrapCarousel = new bootstrap.Carousel(carouselElement);
        }
    },[])
    return(
        <div id="carousel-container" className="container-fluid d-flex mb-3">
                    <div id="carousel-1" className="carousel slide mt-3 mb-1" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" data-bs-theme="dark" className="active" aria-current="true" aria-label="image-1"></button>
                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1" data-bs-theme="dark"aria-label="image-2"></button>
                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2" data-bs-theme="dark"aria-label="image-3"></button>
                            <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="3" data-bs-theme="dark"aria-label="image-4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="src\assets\Carousel-1Assets\house1.png" className="d-block  img-fluid object-fit-scale-down" alt="image-1" />
                            </div>
                            <div className="carousel-item ">
                                <img src="src\assets\Carousel-1Assets\house2.png" className="d-flex img-fluid object-fit-scale-down" alt="image-2" />
                            </div>
                            <div className="carousel-item ">
                                <img src="src\assets\Carousel-1Assets\house3.png" className="d-block  img-fluid object-fit-scale-down" alt="image-3" />
                            </div>
                            <div className="carousel-item">
                                <img src="src\assets\Carousel-1Assets\house4.png" className="d-block  img-fluid object-fit-scale-down" alt="image-4" />
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev" data-bs-theme="dark">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next" data-bs-theme="dark">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Próximo</span>
                            </button>
                        </div>
                    </div>
                </div>
    );
}

export default Carousel1;