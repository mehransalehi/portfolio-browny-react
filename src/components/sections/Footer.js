import './../../scss/Footer.scss';
import ScrollTopButton from '../elements/ScrollTopButton';

function Footer(props){
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
			<ScrollTopButton scrollTop={props.scrollTop}/>
        </footer>{/*<!--/.footer-copyright-->*/}
		{/*<!--footer-copyright end-->*/}
        </>
    );
}

export default Footer;