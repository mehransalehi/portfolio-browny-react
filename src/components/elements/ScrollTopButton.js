import { useEffect,useRef } from 'react';
import './../../scss/elements/_ScrollTopButton.scss'




function ScrollTopButton(props){
    function handleClick(){
        window.scrollTo({
            top: 0,
            behavior : 'smooth'
        });
    }
    return (
        <>
			<div id="scroll-Top" className={props.scrollTop > 600 ? 'fadein' : ''} onClick={handleClick}>
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" ></i>
				</div>
			</div>{/*<!--/.scroll-Top-->*/}
        </>
    );
}

export default ScrollTopButton;