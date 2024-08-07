import './../../scss/Contact.scss';

function Contact() {
    return (
        <>
            {/*<!--contact start -->*/}
            <section id="contact" className="contact">
                <div className="section-heading text-center">
                    <h2>contact me</h2>
                </div>
                <div className="container">
                    <div className="contact-content">
                        <div className="row">
                            <div className="col-md-offset-1 col-md-5 col-sm-6">
                                <div className="single-contact-box">
                                    <div className="contact-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="name" placeholder="Name*" name="name"/>
                                                    </div>{/*<!--/.form-group-->*/}
                                                </div>{/*<!--/.col-->*/}
                                                <div className="col-sm-6 col-xs-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="email" placeholder="Email*" name="email"/>
                                                    </div>{/*<!--/.form-group-->*/}
                                                </div>{/*<!--/.col-->*/}
                                            </div>{/*<!--/.row-->*/}
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject"/>
                                                    </div>{/*<!--/.form-group-->*/}
                                                </div>{/*<!--/.col-->*/}
                                            </div>{/*<!--/.row-->*/}
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
                                                    </div>{/*<!--/.form-group-->*/}
                                                </div>{/*<!--/.col-->*/}
                                            </div>{/*<!--/.row-->*/}
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="single-contact-btn">
                                                        <a className="contact-btn" href="#" role="button">submit</a>
                                                    </div>{/*<!--/.single-single-contact-btn-->*/}
                                                </div>{/*<!--/.col-->*/}
                                            </div>{/*<!--/.row-->*/}
                                        </form>{/*<!--/form-->*/}
                                    </div>{/*<!--/.contact-form-->*/}
                                </div>{/*<!--/.single-contact-box-->*/}
                            </div>{/*<!--/.col-->*/}
                            <div className="col-md-offset-1 col-md-5 col-sm-6">
                                <div className="single-contact-box">
                                    <div className="contact-adress">
                                        <div className="contact-add-head">
                                            <h3>browny star</h3>
                                            <p>uI/uX designer</p>
                                        </div>
                                        <div className="contact-add-info">
                                            <div className="single-contact-add-info">
                                                <h3>phone</h3>
                                                <p>987-123-6547</p>
                                            </div>
                                            <div className="single-contact-add-info">
                                                <h3>email</h3>
                                                <p>browny@info.com</p>
                                            </div>
                                            <div className="single-contact-add-info">
                                                <h3>website</h3>
                                                <p>www.brownsine.com</p>
                                            </div>
                                        </div>
                                    </div>{/*<!--/.contact-adress-->*/}
                                    <div className="hm-foot-icon">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>{/*<!--/li-->*/}
                                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>{/*<!--/li-->*/}
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>{/*<!--/li-->*/}
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>{/*<!--/li-->*/}
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>{/*<!--/li-->*/}
                                        </ul>{/*<!--/ul-->*/}
                                    </div>{/*<!--/.hm-foot-icon-->*/}
                                </div>{/*<!--/.single-contact-box-->*/}
                            </div>{/*<!--/.col-->*/}
                        </div>{/*<!--/.row-->*/}
                    </div>{/*<!--/.contact-content-->*/}
                </div>{/*<!--/.container-->*/}

            </section>{/*<!--/.contact-->*/}
            {/*<!--contact end -->*/}
        </>
    );
}


export default Contact;