import './../../scss/Header.scss'

function Header(){

	function handleClick(e){
		e.preventDefault();

		let id = e.target.getAttribute('href');
		let target = document.querySelector(id);
		window.scrollTo({
			top: target.offsetTop - 100 , 
			behavior : 'smooth'
		}) 
	}
    return (
        <>
        {/* <!-- top-area Start --> */}
		<header className="top-area">
			<div className="header-area">
				{/* <!-- Start Navigation --> */}
			    <nav className="navbar navbar-default bootsnav navbar-fixed dark on no-full no-background">

			        <div className="container">

			            {/* <!-- Start Header Navigation --> */}
			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i className="fa fa-bars"></i>
			                </button>
			                <a className="navbar-brand" href="index.html">browny</a>
			            </div>{/* <!--/.navbar-header-->
			            <!-- End Header Navigation --> */}

			            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
			            <div className="collapse navbar-collapse menu-ui-design show" id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li className=" smooth-menu active"></li>
			                    <li className="smooth-menu"><a href="#education" onClick={handleClick}>education</a></li>
			                    <li className="smooth-menu"><a href="#skills" onClick={handleClick}>skills</a></li>
			                    <li className="smooth-menu"><a href="#experience" onClick={handleClick}>experience</a></li>
			                    <li className="smooth-menu"><a href="#profiles" onClick={handleClick}>profile</a></li>
			                    <li className="smooth-menu"><a href="#portfolio" onClick={handleClick}>portfolio</a></li>
			                    <li className="smooth-menu"><a href="#clients" onClick={handleClick}>clients</a></li>
			                    <li className="smooth-menu"><a href="#contact" onClick={handleClick}>contact</a></li>
			                </ul>{/* <!--/.nav --> */}
			            </div>{/* <!-- /.navbar-collapse --> */}
			        </div>{/* <!--/.container--> */}
			    </nav>{/* <!--/nav--> */}
			    {/* <!-- End Navigation --> */}
			</div>{/* <!--/.header-area--> */}
		    <div className="clearfix"></div>
		</header>{/* <!-- /.top-area--> */}
		{/* <!-- top-area End --> */}
        </>
    )
}

 
export default Header;