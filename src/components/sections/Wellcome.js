import './../../scss/Welcome.scss'
function Welcome() {

    return (
        <>
            {/* <!--welcome-hero start --> */}
            <section id="welcome-hero" className="welcome-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="header-text">
                                <h2>hi <span>,</span> i am <br /> browny <br /> star <span>.</span>   </h2>
                                <p>ui/ux designer and web developer</p>
                                <a href="assets/download/browney.txt" download>download resume</a>
                                {/* <!--/.header-text--> */}
                            </div>{/* <!--/.col--> */}
                        </div>{/* <!-- /.row--> */}
                    </div>{/* <!-- /.container--> */}
                </div>
            </section>{/* <!--/.welcome-hero--> */}
            {/* <!--welcome-hero end --> */}
        </>
    )
}



export default Welcome;