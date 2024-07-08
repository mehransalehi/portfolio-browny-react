import './../../scss/Footer.scss';


function Footer(){
    return(
        <>
        {/*<!--footer-copyright start-->*/}
		<footer id="footer-copyright" className="footer-copyright">
			<div className="container">
				<div className="hm-footer-copyright text-center">
					<p>
						&copy; copyright yourname. design and developed by <a href="https://www.themesine.com/">themesine</a>
					</p>{/*<!--/p-->*/}
				</div>{/*<!--/.text-center-->*/}
			</div>{/*<!--/.container-->*/}

			<div id="scroll-Top">
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" ></i>
				</div>
				
			</div>{/*<!--/.scroll-Top-->*/}
			
        </footer>{/*<!--/.footer-copyright-->*/}
		{/*<!--footer-copyright end-->*/}
        </>
    );
}

export default Footer;