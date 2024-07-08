import './../../scss/Portfolio.scss';
const images = require.context('./../../images/portfolio',true);
const imageList = images.keys().map(image => images(image));

function Portfolio() {
    return (
        <>
            {/* <!--portfolio start --> */}
            <section id="portfolio" className="portfolio">
                <div className="portfolio-details">
                    <div className="section-heading text-center">
                        <h2>portfolio</h2>
                    </div>
                    <div className="container">
                        <div className="portfolio-content">
                            <div className="isotope">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="item">
                                            <img src={imageList[0]} alt="portfolio image" />
                                            <div className="isotope-overlay">
                                                <a href="#">
                                                    ui/ux design
                                                </a>
                                            </div>{/* <!-- /.isotope-overlay --> */}
                                        </div>{/* <!-- /.item --> */}
                                        <div className="item">
                                            <img src={imageList[1]} alt="portfolio image" />
                                            <div className="isotope-overlay">
                                                <a href="#">
                                                    ui/ux design
                                                </a>
                                            </div>{/* <!-- /.isotope-overlay --> */}
                                        </div>{/* <!-- /.item --> */}
                                    </div>{/* <!-- /.col --> */}

                                    <div className="col-sm-4">
                                        <div className="item">
                                            <img src={imageList[2]} alt="portfolio image" />
                                            <div className="isotope-overlay">
                                                <a href="#">
                                                    web design
                                                </a>
                                            </div>{/* <!-- /.isotope-overlay --> */}
                                        </div>{/* <!-- /.item --> */}
                                    </div>{/* <!-- /.col --> */}

                                    <div className="col-sm-4">
                                        <div className="item">
                                            <img src={imageList[3]} alt="portfolio image" />
                                            <div className="isotope-overlay">
                                                <a href="#">
                                                    web development
                                                </a>
                                            </div>{/* <!-- /.isotope-overlay --> */}
                                        </div>{/* <!-- /.item --> */}
                                        <div className="item">
                                            <img src={imageList[4]} alt="portfolio image" />
                                            <div className="isotope-overlay">
                                                <a href="#">
                                                    web development
                                                </a>
                                            </div>{/* <!-- /.isotope-overlay --> */}
                                        </div>{/* <!-- /.item --> */}
                                    </div>{/* <!-- /.col --> */}
                                </div>{/* <!-- /.row --> */}
                            </div>{/* <!--/.isotope--> */}
                        </div>{/* <!--/.gallery-content--> */}
                    </div>{/* <!--/.container--> */}
                </div>{/* <!--/.portfolio-details--> */}

            </section>{/* <!--/.portfolio--> */}
            {/* <!--portfolio end --> */}
        </>
    );
}


export default Portfolio;