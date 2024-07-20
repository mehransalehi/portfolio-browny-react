import { useEffect } from 'react';
import './../../scss/Welcome.scss'
import LinkButton from '../elements/LinkButton';
import React from 'react';
function Welcome() {

    useEffect(()=>{
        let h2 = document.querySelector('.header-text>h2');
        let p = document.querySelector('.header-text>p');

        h2.classList.add('loaded');
        p.classList.add('loaded');
    },[]);
      
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
                                <LinkButton text="Download Resume" link="http://google.com" />
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