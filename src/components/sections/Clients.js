import './../../scss/Clients.scss';
const images = require.context('./../../images/clients',true);
const imageList = images.keys().map(image => images(image))
function Clients(){
    return (
        <>
        {/*<!--clients start -->*/}
		<section id="clients" className="clients">
			<div className="section-heading text-center">
				<h2>clients</h2>
			</div>
			<div className="clients-area">
				<div className="container">
					<div className="owl-carousel owl-theme" id="client">
						<div className="item">
							<a href="#">
								<img src={imageList[0]} alt="brand-image" />
							</a>
						</div>{/*<!--/.item-->*/}
						<div className="item">
							<a href="#">
								<img src={imageList[1]} alt="brand-image" />
							</a>
						</div>{/*<!--/.item-->*/}
						<div className="item">
							<a href="#">
								<img src={imageList[2]} alt="brand-image" />
							</a>
						</div>{/*<!--/.item-->*/}
						<div className="item">
							<a href="#">
								<img src={imageList[3]} alt="brand-image" />
							</a>
						</div>{/*<!--/.item-->*/}
						<div className="item">
							<a href="#">
								<img src={imageList[4]} alt="brand-image" />
							</a>
						</div>{/*<!--/.item-->*/}
						<div className="item">
							<a href="#">
								<img src={imageList[5]} alt="brand-image" />
							</a>
						</div>{/*<!--/.item-->*/}
						<div className="item">
							<a href="#">
								<img src={imageList[6]} alt="brand-image" />
							</a>
						</div>{/*<!--/.item-->*/}
					</div>{/*<!--/.owl-carousel-->*/}
				</div>{/*<!--/.container-->*/}
			</div>{/*<!--/.clients-area-->*/}

		</section>{/*<!--/.clients-->*/}
        </>
    );
}


export default Clients;