function Slider(){
    return (<>
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="assets/banner/ban1.jpg" className="img-fluid img-res" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="assets/banner/ban2.jpg" className="img-fluid img-res" alt="..."/>
                </div>
            
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
</div>

    </>)
}
export default Slider;